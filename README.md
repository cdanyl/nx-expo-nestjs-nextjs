# nx-expo-nestjs-nextjs

FullStack Hybrid Starter Kit for Monorepo based on [NX](https://nx.dev/) containing Expo Web for mobile app, Next.js for a web app and NestJS for the backend.

## Installation

```
git clone git@github.com:cdanyl/nx-expo-nestjs-nextjs.git <project_folder>
cd <project_folder>
yarn
```

## Setup

- Check the `workspace.json` to add a NX cloud token https://nx.app/ as CI (optional)

- If you create a new library, you need to add the path to the `babel.config.js` as an alias

## Run

To unit test all applications

```
nx affected --target=test --all
```

Start NestJS Server

```
yarn start api
```

Start Next.JS Web App

```
yarn start web
```

Start Expo (React Native for IOS/Android & React Native Web)

```
yarn start mobile
```
