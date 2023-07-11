# Onde Assistir (Where to Watch)

![Onde Assistir Logo](https://raw.githubusercontent.com/LaercioSR/onde-assistir-api/main/assets/images/logo.svg)

## Index

* [About the Project](#about)
* [How to Run](#how-to-run)
  * [Prerequisites](#prerequisites)
  * [Running](#running)
* [Technologies](#technologies)
* [Contact](#contact)

## About

Onde Assistir (Where to Watch) is a platform with broadcasts of sports games (mainly football), focused on the Brazilian market, with options for broadcasts on TV and the Internet.

![Documentation Screenshot](https://raw.githubusercontent.com/LaercioSR/onde-assistir-api/main/assets/images/screenshot.png#vitrinedev)

Access the documentation at: <https://ondeassistir.laerciorios.com/api/docs/>

The platform emerged as an academic project in the Computer Engineering course (UEFS) in the Network Programming (WEB Programming) discipline taught by Professor João Rocha and continued as a personal challenge and an opportunity to improve new knowledge.

For more details about the discipline, see: [EXA844](https://sites.google.com/a/ecomp.uefs.br/joao/home/courses/exa844)

Onde Assistir is online and you can access it at:

* [Onde Assistir](https://ondeassistir.laerciorios.com/)

See more about the front-end project in:

* [GitHub](https://github.com/LaercioSR/onde-assistir-front)

Currently the project uses a crawler in Python to extract information from the games, to learn more about the crawler either at:

* [GitHub](https://github.com/LaercioSR/onde-assistir-crawler)

## How to Run

### Prerequisites

To run the project you will need to have [Docker](https://www.docker.com/) and docker composer installed on your machine.

### Running

```bash
# Clone this repository
$ git clone git@github.com:LaercioSR/onde-assistir-api.git

# Clone the crawler repository
$ git clone git@github.com:LaercioSR/onde-assistir-crawler.git

# Access the project folder in terminal/cmd
$ cd onde-assistir-api

# Copy the .env
$ cp .env.example .env
# After that it is necessary to fill the .env.
# Remember to enter the crawler folder path correctly. Example:
# CRAWLER_FOLDER=~/projects/onde-assistir-crawler

# Run the application in development mode
$ docker compose -f "docker-compose.dev.yml" up -d --build
# If everything is correct the api can be accessed via the URL http://localhost:3333 .
```

## Technologies

* [**Node**](https://nodejs.org/)
  * [Express](https://expressjs.com/)
  * [TypeORM](https://typeorm.io/)
* [**Typescript**](https://www.typescriptlang.org/)
* [**PostgreSQL**](https://www.postgresql.org/)
* [Docker](https://www.docker.com/)
* [Babel](https://babeljs.io/)
* [ESLint](https://eslint.org/)

## Contact

If you have any questions or suggestions, feel free to contact:

Name: Laercio Rios

Email: [contact@laerciorios.com](mailto:contact@laerciorios.com)
