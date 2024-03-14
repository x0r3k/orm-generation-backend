# ORM Generation API

## Description

ORM Generation API is a main part of backend services that is used to work with a client platform and process user requests 

## Infrastructure

### Main technologies
- [Node.js](https://nodejs.org/en/download/) v18 or higher
- [Yarn](https://yarnpkg.com/lang/en/) v1.22 or higher, `npm i -g yarn` once you have Node.js installed
- [Nest](https://nestjs.com/) version is controlled by package.json, installed via `yarn install` when you setup the app
- [PostgreSQL](https://www.postgresql.org/download/) v14 or higher

For all of the above, many previous versions will probably work but haven't been tested. Also, if you're on a Mac, I'd personally suggest using [Homebrew](https://brew.sh/) to install [postgresql](https://formulae.brew.sh/formula/postgresql) and [nvm](https://formulae.brew.sh/formula/nvm), then use nvm to install Node.js.

### External APIs

- TBD

### Other Infrastructure

- TBD

## Architecture

### Summary
List of articles that influenced the creation of the basic architecture:
- https://github.com/CatsMiaow/nestjs-project-structure/tree/master
- https://medium.com/the-crowdlinker-chronicle/best-way-to-structure-your-directory-code-nestjs-a06c7a641401
- https://www.linkedin.com/pulse/nestjs-project-structure-architecture-demo-becerra-monsalve-m-c-s-3ngge/

### Folders
Still do not know how would be better - store ORM model and related module in one place or split them.\
Currently ORM models are stored in `src/entity` and modules as `src/module-name`
```
+-- dist // Source build
+-- public // Static Files
+-- src
|   +-- config // Environment Configuration
|   +-- entity // ORM Entities
|   +-- authentication // Authentication
|   +-- common // Global Nest Module
|   +-- database // Database and ORM files
|   +-- * // Other Nest Modules, non-global, same as common structure above
+-- test // Jest testing
+-- typings // Modules and global type definitions

// Module structure
// Add folders according to module scale. If it's small, you don't need to add folders.
+-- src/greeter
|   +-- * // folders
|   +-- greeter.constant.ts
|   +-- greeter.controller.ts
|   +-- greeter.service.ts
|   +-- greeter.module.ts
|   +-- greeter.*.ts
|   +-- index.ts
```

## Preparation

1. To install node packages:
```bash
$ yarn install
```
2. To prepare DB
```bash
TBD
```

## Running the app

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Test

```bash
# unit tests
$ yarn run test

# e2e tests
$ yarn run test:e2e

# test coverage
$ yarn run test:cov
```

## Hosting and Deployment

TBD

## Support

ORM Generation is an unlicensed open source project.

## Stay in touch

- Author - Kyrylo Dolhopolov
- Website - [https://github.com/x0r3k/orm-generation-backend](https://github.com/x0r3k/orm-generation-backend)
