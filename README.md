# CGDS Landing Page for Public Cluster

A static link-out home page for `cgds.uab.edu`. The main CGDS website is
[https://sites.uab.edu/cgds](https://sites.uab.edu/cgds).

## Run Locally

```bash
python3 -m http.server 8000 --directory src
```

Open [http://localhost:8000/](http://localhost:8000/).

## Run Locally With Docker

```bash
docker build --tag cgds-domain-home-page:local -f Dockerfile .
docker run --rm -p 8080:80 cgds-domain-home-page:local
```

Open [http://localhost:8080/](http://localhost:8080/).

## Build Production Image

```bash
docker build --tag ghcr.io/uab-cgds-worthey/cgds-domain-home-page:latest -f Dockerfile .
```

## Repo's directory structure

The directory structure below shows the nature of files/directories used in this repo.

```text
cgds-domain-home-page
├── CHANGELOG.md      <- Log of changes made
├── Dockerfile        <- Builds the nginx image used to serve the static site
├── README.md
├── etc
│   └── default.conf  <- nginx configuration
└── src               <- Static site source files
    ├── images        <- Image assets used by the page
    ├── index.html
    ├── news.js
    └── style.css
```
