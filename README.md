# Campus Events: Build, Lint and Test in CI

The app is in `events-api/`. Its tests, `Dockerfile` and lockfile are already there. The workflow in `.github/workflows/ci.yml` runs the tests. Follow your assignment to extend it.

Run the checks on your laptop:

```bash
cd events-api
npm ci
npm test
docker run --rm -i hadolint/hadolint:v2.12.0-alpine@sha256:3c206a451cec6d486367e758645269fd7d696c5ccb6ff59d8b03b0e45268a199 < Dockerfile
docker build -t campus-events:ci .
```

`scripts/prepared-failure.sh` simulates a teammate's change that breaks a test. Use it only in Task 3.
