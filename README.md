# About

This project uses NodeJS and NextJS

# Getting Started

## Not use docker:
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
1. Make sure you have **Docker** and **docker-compose** installed.
2. Build docker to install your dependencies and tart your app

    ```
    cd root folder
    docker-compose up --build (or docker-compose up -d)
    ```
3. Run app on port config in file docker
4. Accept container in docker:

    ```
    docker exec -it <container_id or container_name> sh
    ```

Simply run `npm test` and all your tests in the `test/` directory will be run.

# Contributors:

1. BKFA

# Technology
**Frontend**:

- We use NextJS with redux, redux-saga.

**Backend**:

- We use NodeJS, ExpressJs.
- Database: MongoDB.

**Unit test**:

- Write unit test with JEST.

# Features
Updating .....

# Somethings wrong!!
If you find that something's wrong with this application, you can contact us at [Facebook address](https://www.facebook.com/bkfateam/).
