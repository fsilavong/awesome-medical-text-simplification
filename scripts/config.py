import os 

# Keywords derived from `notebooks/EDA.ipynb`
keywords = ['text simplification', 'sentence simplification', 'text style transfer',
    'text adaptation', 'lexical simplification', 'readability']
pub_after_year = 2021
max_threads = min(32, (os.cpu_count() or 1) * 2)