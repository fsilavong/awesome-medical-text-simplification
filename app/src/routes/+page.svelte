<script lang="ts">
  import { onMount } from "svelte";

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
    metadata: Metadata;
  }

  let results: Result[] = [];
  let last_updated = "";

  onMount(async () => {
    const response = await fetch(`${import.meta.env.BASE_URL}filtered_result.json`);
    const data = await response.json();
    results = data.results;
    results.sort((a, b) => {
      const yearA = parseInt(a.metadata.pub_year, 10) || 0; // Fallback to 0 if invalid
      const yearB = parseInt(b.metadata.pub_year, 10) || 0;
      return yearB - yearA;
    });
    last_updated = data.last_updated;
  });
</script>

<div class="flex flex-col items-center pt-24 text-white bg-slate-800">
  <div class="flex flex-col md:w-1/2 w-full items-center space-y-4 pb-8">
    <p class="text-xl">Awesome Medicial Text Simplification</p>
    <p class="text-sm">Last updated: {last_updated}</p>
    <p class="text-sm">Number of Papers: {results.length}</p>
    <p class="text-sm">Found by <a href='https://github.com/fsilavong/litocate'>Litocate</a></p>
  </div>

  <div
    class="flex h-full md:w-1/2 w-full overflow-y-auto rounded-lg md:p-4 p-8 scrollbar text-slate-300"
  >
    {#if results.length > 0}
      <div class='divide-y divide-slate-400'>
        {#each results as result, idx}
          <div class=''>
            <div class="my-4 flex flex-col space-y-4">
              <a class="font-semibold" href={result.metadata.url}>{result.title} 🔗</a>
            </div>

            {#if result.abstract && typeof result.abstract === "object"}
              {#each Object.entries(result.abstract) as [key, value]}
                <div class='mb-4'>
                  {#if !(key.startsWith("title") || key.startsWith("abstract"))}
                    <p class="font-semibold text-xs">{key}</p>
                  {/if}
                  <p class='text-sm'>{value}</p>
                </div>
              {/each}
            {:else}
              <p>No abstract available</p>
            {/if}

            <div class="metadata mb-4 text-sm">
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
