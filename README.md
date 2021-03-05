# nextjs-env-config-dev-bug

## Bug:

Environment variables defined in next.config.js can not be read in page components in dev (yarn dev) but they can be read in production mode (yarn build && yarn start).

## Reproduce

On next@10.0.8:

- Run this project in dev (yarn dev) mode
- Load the home page -- the environment variable is undefined

- Run this sproject in production (yarn build && yarn start) mode
- Load the home page -- the environment variable IS defined now

## Control

As a control I ran this project on next@10.0.7. In that version the environment variable is defined in both dev and production modes.
