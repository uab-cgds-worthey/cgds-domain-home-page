# CGDS Repository Template [:pencil2: Edit this title]

<!-- markdown-link-check-disable -->
[![Perform linting -
Markdown](https://github.com/uab-cgds-worthey/cgds_repo_template/actions/workflows/linting.yml/badge.svg)](https://github.com/uab-cgds-worthey/cgds_repo_template/actions/workflows/linting.yml)
<!-- markdown-link-check-enable -->

A basic linkout home page for cgds.uab.edu.  Main CGDS website is still https://sites.uab.edu/cgds

## How to build

```bash
 docker build --no-cache=true --tag=ghcr.io/uab-cgds-worthey/cgds-domain-home-page:latest -f Dockerfile .
```

## Repo's directory structure

The directory structure below shows the nature of files/directories used in this repo.

```sh
$ tree -a cgds_repo_template/
cgds_repo_template
├── CHANGELOG.md      <- Log of changes made
│
├── README.md
│
├── .gitignore        <- Specifies intentionally untracked files to ignore by git
│
├── .editorconfig     <- Helps maintain consistent coding styles for multiple users working on the same project across
│                        various editors and IDEs. See https://editorconfig.org/ for more info
│
├── .markdownlint.json  <- Markdown linting config
│
├── configs           <- Dir to store config files. Conda env, requirements.txt, etc.
│
├── src               <- Dir to store source code for use in this project
│
├── .github
    ├── ISSUE_TEMPLATE            <- Github issue templates
    │   ├── bug_report.md
    │   └── feature_request.md
    ├── PULL_REQUEST_TEMPLATE     <- Github PR templates
    │   └── pull_request_template.md
    └── workflows                 <- Github actions workflows for automated processes (eg. linting, etc)
        └── linting.yml

```

## Contributing

We welcome contributions! [See the docs for guidelines](./CONTRIBUTING.md).
