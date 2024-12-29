<script lang="ts">
  import { onMount } from "svelte";
  import Icon from "@iconify/svelte";

  interface Metadata {
    url: string;
    doi?: string;
    pmid?: string;
    pmc?: string;
    anthology_id?: string;
    pub_year?: string;
    bibtext?: string;
  }
  
  interface Result {
    title: string;
    abstract: Record<string, string>;
    is_peer_reviewed: boolean;
    is_relevant_pred?: boolean;
    metadata: Metadata;
  }

  let results: Result[] = [];
  let filteredResults: Result[] = [];
  let last_updated = "";
  let showRelevantOnly = false;

  onMount(async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}filtered_result.json`);
    const data = await response.json();
    results = data.results;
    results.sort((a, b) => {
      const yearA = parseInt(a.metadata.pub_year, 10) || 0; // Fallback to 0 if invalid
      const yearB = parseInt(b.metadata.pub_year, 10) || 0;
      return yearB - yearA;
    });
    filteredResults = [...results];
    last_updated = data.last_updated;
    document.title = "Awesome Medical Text Simplification";
  });

  function toggleRelevantOnly() {
    showRelevantOnly = !showRelevantOnly;
    if (showRelevantOnly) {
      filteredResults = results.filter((result) => result.is_relevant_pred);
    } else {
      filteredResults = [...results];
    }
  }

</script>

<div class="flex flex-col items-center pt-24 text-white bg-slate-800">
  <div class='flex flex-col md:w-1/2 w-full'>
    <div class="flex flex-col items-center space-y-4 pb-8">
      <p class="text-xl">Awesome Medicial Text Simplification</p>
      <p class="text-sm">Last updated: {last_updated}</p>
      <p class="text-sm">
        {results.length} 
        {#if showRelevantOnly}
        ({filteredResults.length} after filter)
        {/if}
        Peer Reviewed Papers 📈 since 2021
      </p>
      <p class="text-sm">🔋 by <a href='https://github.com/fsilavong/litocate'>Litocate</a></p>
    </div>
    <div class="md:self-end self-center flex flex-row">
      <button
        class="flex space-x-4"
        on:click={toggleRelevantOnly} 
      >
        <p class='mr-0.5'> AI Filter </p>
        {#if showRelevantOnly}
          <Icon icon="mdi:circle" style="color: green; font-size: 24px;" />
        {:else}
          <Icon icon="mdi:circle" style="color: red; font-size: 24px;" />
        {/if}
      </button>
    </div>
  </div>
  <div
    class="flex h-full md:w-1/2 w-4/5 overflow-y-auto rounded-lg md:p-4 scrollbar text-slate-300 text-wrap"
  >
    {#if filteredResults.length > 0}
      <div class='divide-y divide-slate-400 w-full'>
        {#each filteredResults as result, idx}
          <div class=''>
            <div class="my-4 flex flex-col space-y-4">
              <a class="font-semibold" href={result.metadata.url}>{result.title} 🔗</a>
            </div>

            {#if result.abstract && typeof result.abstract === "object"}
              {#each Object.entries(result.abstract) as [key, value]}
                <div class='mb-4 w-full'>
                  {#if !(key.startsWith("title") || key.startsWith("abstract"))}
                    <p class="font-semibold text-xs">{key}</p>
                  {/if}
                  <p class='text-sm'>{value}</p>
                </div>
              {/each}
            {:else}
              <p>No abstract available</p>
            {/if}

            <div class="metadata mb-4 text-sm w-full">
              {#if result.metadata.doi}
                <p>
                  <strong>DOI:</strong>
                  <a href={result.metadata.url} target="_blank"
                    >{result.metadata.doi}</a
                  >
                </p>
              {:else}
                <p>
                  <strong>URL:</strong>
                  <a href={result.metadata.url} target="_blank"
                    >{result.metadata.url}</a
                  >
                </p>
              {/if}

              {#if result.metadata.anthology_id}
                <p>
                  <strong>Anthology ID:</strong>
                  {result.metadata.anthology_id}
                </p>
              {:else}
                <p><strong>Pub Year:</strong> {result.metadata.pub_year}</p>
              {/if}
            </div>
          </div>
        {/each}
      </div>
    {:else}
      <p>Loading...</p>
    {/if}
  </div>
</div>
