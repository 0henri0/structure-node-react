# Structure Node React :rocket:

This project aim to developed a [open publishing platform](https://en.wikipedia.org/wiki/Electronic_publishing) by NodeJS and NextJS. The platform is an example of social journalism, having a hybrid collection of amateur and professional people and publications, or exclusive blogs or publishers, and is regularly regarded as a blog host. Especially It's totally open source.

[![Open Source Love](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://github.com/ellerbrock/open-source-badges/)

# Getting Started

## Run on local machine:
1. Make sure you have [NodeJS](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed.
2. Install your dependencies

    ```
    git clone [project]
    npm run setup
    ```

3. Start your app

    ```
    npm run dev
    ```
## Use docker:
1. Make sure **Docker** and **docker-compose** were installed.
2. Build docker to install neccessary dependencies and start your app

    ```
    cd root folder
    docker-compose up --build (or docker-compose up -d)
    ```
3. Run app on config port 
4. Access container in command line:

    ```
    docker exec -it <container_id or container_name> sh
    ```

Simply run `npm test` and all your tests in the `test/` directory will be run.

# Contributors:

<table><tr><td align="center"><a href="https://github.com/bkfa"><img src="https://avatars0.githubusercontent.com/u/37947030" width="80px;" alt="BKFA"/><br /><sub><b>BKFA Team</b></sub></a></td><td align="center"><a href="https://github.com/0henri0"><img src="https://avatars2.githubusercontent.com/u/35694649" width="80px;" alt="0henri0"/><br /><sub><b>Thai NV</b></sub</td><td align="center"><a href="http://github.com/trantrongbinh"><img src="https://avatars2.githubusercontent.com/u/27794077" width="80px;" alt="trantrongbinh"/><br /><sub><b>Binh TT</b></sub></a></td><td align="center"><a href="https://github.com/damminhtien"><img src="https://avatars0.githubusercontent.com/u/25586408" width="80px;" alt="damminhtien"/><br /><sub><b>Tien DZ</b></sub></a></td></tr></table>

# Technology
**Frontend**:

- NextJS with redux, Redux-Saga.

**Backend**:

- Server NodeJS, ExpressJS.
- Database: MongoDB.

**Unit test**:

- Write unit test with Jest.

# Features
Updating .....

# Somethings Bug :bug: ?
If you find that something's bug in this application, please you contact us at [Facebook](https://www.facebook.com/bkfateam/).
