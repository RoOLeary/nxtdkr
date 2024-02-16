This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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