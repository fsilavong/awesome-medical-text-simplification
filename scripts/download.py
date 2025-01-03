import json 
import datetime

from litocate.data.pubmed import PubMedClient
from litocate.data.acl import AnthologyClient
from litocate.data.constant import DS_FORMAT, LAST_UPDATE_KEY, RESULT_KEY, PUBMED_FOLDERS

import sys 
sys.path.append('.')
from config import keywords, pub_after_year, max_threads

download_datetime = datetime.datetime.now().strftime(DS_FORMAT)
results = []


for pubmed_folder in PUBMED_FOLDERS:
    pubmed_result = PubMedClient(
        folder=pubmed_folder    
    ).find_papers(
        keywords=keywords,
        pub_after_year=pub_after_year,
        max_threads=max_threads,
        # n=2
    )
    results.extend(pubmed_result)
    
acl_result = AnthologyClient().find_papers(
    keywords=keywords, 
    pub_after_year=pub_after_year,
    # n=2
)
results.extend(acl_result)

with open(f'result.json', 'w') as f:
    json.dump({
        RESULT_KEY: [r.as_json() for r in results],
        LAST_UPDATE_KEY: download_datetime
    }, f, indent=4)
