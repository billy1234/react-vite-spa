# React/Vite template

A simple template for getting started with react/vite

# Getting Started

1.  Ensure you have node `20.11.0` on your machine.
2.  First ensure you have node.js installed on your machine and a text editior of your choice (VSCode is recomended)
3.  Then run both:

        npm install
        npm run setup

This will install all packages and setup and dev config.

## Environment variables

See the `env` file in the root directory for
an example env, copy it and rename to .env.local and configure as needed.

Variables **MUST** be prefixed with VITE if you wish to have it end up in the
build. see [Vite](https://vitejs.dev/guide/env-and-mode)

# Available Scripts

In the project directory, you can run:

## `npm run setup`

Will add the nessicary githooks to the project
to enable auto format on commit.

## `npm run dev`

Runs the app in the development mode.\

The page will reload if you make edits.\
You will also see any lint errors in the console.

## `npm run test`

Launches jest to run all tests, CI will trigger this.

This is required to pass before creating a pull request.

## `npm run test:E2E`

Launches cypress to run E2E tests, CI will trigger this.

This is required to pass before creating a pull request.

## `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

## `npm run docker-build`

Must be ran after `npm run build`
Will take the `build/` folder and add it to the nginx docker image.
Recomened for "production like" testing.

## Docker

For local Docker testing, run this by the CLI.
docker build . --tag pat-ui
docker run --name pat-ui -d -p 80:80 pat-ui
