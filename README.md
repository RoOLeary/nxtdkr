This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).


## Requirements:

- Docker Desktop
- Node

## Includes: 

- Typescript
- TailwindCSS
- Eslint/Prettier standards
- Vscode standards - auto lint files on save
- Commitlint (standardise commit messages)

## To Do: 

- Add shortcut directory/index/glossary
- Add Next Auth
- Demo forms/middleware
- Advanced tracking (GTM plus Posthog most likely)


## Installation

First, clone the repo. cd to the project source in your terminal and run this:

```
git clone git@github.com:RoOLeary/nxtdkr.git
```

Then, install all the stuff
(note: force because I'm lazy)

```
cd nxtdkr
npm install --force
```

Fast build: 
```
COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose build
```

Then:
```
docker-compose up -d
```

The project will build and render on http://localhost:3000