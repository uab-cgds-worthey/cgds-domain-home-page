# CGDS Landing Page for Public Cluster

A basic link out home page for `cgds.uab.edu`. Main CGDS website is still
[https://sites.uab.edu/cgds](https://sites.uab.edu/cgds).

## How to build

```bash
docker build --no-cache=true --tag ghcr.io/uab-cgds-worthey/cgds-domain-home-page:latest -f Dockerfile .
```

## Run locally (Docker)

```bash
docker build --tag cgds-domain-home-page:local -f Dockerfile .
docker run --rm -p 8080:80 cgds-domain-home-page:local
```

Open [http://localhost:8080/](http://localhost:8080/).
After editing files under `src/`, rebuild the image and run it again. If updates look stale, rebuild with `--no-cache=true`.

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
