# Todo-Gateway

## Description
A gateway REST-API to receive http request and call the required microservices with a Swagger UI integration to generate endpoints docs.

## Installation

```bash
$ npm install
```

## Running the gateway

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod

# The REST-API should be run on 127.0.0.1:5000 over HTTP
# This gateway has an integration with Swagger Docs, running on 127.0.0.1:5000/docs
```

## Test

```bash
# unit tests
$ npm run test

# test coverage
$ npm run test:cov
```

## Stay in touch

- Author - [Daniel Mejia](https://github.com/danielmejiadev)

## License

This project is licensed under the [MIT licensed](LICENSE) - see the LICENSE file for details.
