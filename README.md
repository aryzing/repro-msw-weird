# Reproduction of weird MSW behaviour

Reproduction repo for [Stackoverflow Question](https://stackoverflow.com/questions/69743031/how-to-make-mock-service-worker-running-in-node-jsdom-for-tests-receive-cros).

Try running the tests, `yarn test` with and without msw enabled (can disable by commenting out lines in [src/test.ts](src/test.ts)).

You'll notice that depending on whether msw is running or not, the cookies configured in [src/addCookies.ts](src/addCookies.ts) will or won't be present in requests received by the express server (the server can be run with `yarn server`).

Seems as if having msw enabled is stripping away cookies from requests.
