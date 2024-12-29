# Awesome Medical Text Simplification

Curated list of peer reviewed papers related to Medical Text Simplification from [PubMed](https://pubmed.ncbi.nlm.nih.gov/) and [ACL Anthology](https://aclanthology.org/). 

For more details on the keywords used, refer to `notebooks/EDA.ipynb` and `scripts/download.py`. Prompt used for AI filter can be found in `scripts/filter.py`. Powered by [Litocate](https://github.com/fsilavong/litocate).

## Developer Guide

**Setup**

```bash
python3.12 -m venv venv
source venv/bin/activate
pip install git+https://github.com/fsilavong/litocate.git
```

**First Time**

```bash
source venv/bin/activate
python scripts/download.py 
python scripts/filter.py
```

**Update**

*TBC*