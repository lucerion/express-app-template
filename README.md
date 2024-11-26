# Express app template

Packages

* [express](https://expressjs.com)
* [dotenv](https://www.npmjs.com/package/dotenv)
* [ESlint](https://www.npmjs.com/package/eslint)

## Setup

### Locally

* Install dependencies: `yarn install`
* Run application: `yarn start`
* Open [http://localhost:3000](http://localhost:3000) in your browser.

### Docker

* [Install Docker](https://docs.docker.com/get-started/get-docker) on your machine.
* Build image: `docker build -t express-app-template .`
* Run application: `docker run -p 3000:3000 express-app-template`
* Open [http://localhost:8000](http://localhost:3000) in your browser.

## Development

### Linting

    yarn lint

## License

[BSD-3-Clause](LICENSE)
