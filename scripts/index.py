import json
import datetime

from litocate.data.pubmed import PubMedClient
from litocate.data.constant import DS_FORMAT, PUBMED_FOLDERS, LAST_UPDATE_KEY

import sys 
sys.path.append('.')
from config import keywords, pub_after_year, max_threads

index = datetime.datetime.now().strftime(DS_FORMAT)
results = []

with open(f'app/static/filtered_result.json', 'r') as f:
    last_updated = json.load(f)[LAST_UPDATE_KEY]

for pubmed_folder in PUBMED_FOLDERS:
    pubmed_result = PubMedClient(
        folder=pubmed_folder    
    ).find_papers_updated_after(
        datetime_str=last_updated, 
        keywords=keywords,
        pub_after_year=pub_after_year,
    )
    results.extend(pubmed_result)
