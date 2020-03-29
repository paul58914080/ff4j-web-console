# FF4J Web Console [![Build Status](https://travis-ci.com/devs-from-matrix/ff4j-web-console.svg?branch=master)](https://travis-ci.com/devs-from-matrix/ff4j-web-console) [![Codacy Badge](https://api.codacy.com/project/badge/Grade/7448d01e1b5f4338881454d265034cca)](https://www.codacy.com/gh/devs-from-matrix/ff4j-web-console?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=devs-from-matrix/ff4j-web-console&amp;utm_campaign=Badge_Grade) [![codecov](https://codecov.io/gh/devs-from-matrix/ff4j-web-console/branch/master/graph/badge.svg)](https://codecov.io/gh/devs-from-matrix/ff4j-web-console) [![dependencies Status](https://david-dm.org/devs-from-matrix/ff4j-web-console/status.svg)](https://david-dm.org/devs-from-matrix/ff4j-web-console) [![devDependencies Status](https://david-dm.org/devs-from-matrix/ff4j-web-console/dev-status.svg)](https://david-dm.org/devs-from-matrix/ff4j-web-console?type=dev)

## How to start ?

#### Serving whole platform

`yarn run start`

> This will serve your app with a mock server. You can find the mock data in `mock/data.json`

#### Serving micro-frontend

- `yarn run start:ff4j-features`
- `yarn run start:ff4j-properties`
- `yarn run start:ff4j-dashboards`

> This will serve your app with a mock server. You can find the mock data in `mock/data.json`

## How to build ?

#### Building whole platform

- `yarn run build`
- `yarn run build:prod`

The build artifacts will be stored in the `dist/` directory.

#### Building micro-frontend as elements

- `yarn run build:features-element`
- `yarn run build:properties-element`
- `yarn run build:dashboards-element`

The build artifacts will be stored in the `elements/` directory.

## How to test ?

#### Testing whole platform

- `yarn run test:all`

#### Testing micro-frontend

- `yarn run test:ff4j-features`
- `yarn run test:ff4j-properties`
- `yarn run test:ff4j-dashboards`

Coverage reports can be found at `coverage/`

## How to contribute

We are really glad you're reading this, because we need volunteer developers to help this project come to fruition.

When contributing to this repository, please first discuss the change you wish to make via issue,
email, slack or any other method with the owners of this repository before making a change. 

Please note we have a code of conduct, please follow it in all your interactions with the project.

### Pull request process

- Ensure you have performed a self-review of your changes
- Ensure the new changes generate no new warnings
- Ensure you have added tests that prove the fix is effective or that the feature works
- Ensure new and existing unit tests pass locally with my changes
- Ensure your commit message should follow [conventional commit message guidelines](https://www.conventionalcommits.org/en/v1.0.0/)

[More information](.github/CONTRIBUTING.md)
