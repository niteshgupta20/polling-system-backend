# Polling System Backend

## About Project

Polling System Backend, an API where anyone can create questions with options and also add votes to it

## Getting Started

- clone the repository

```
git clone <url>
```

- Install dependencies

```
npm install
```

- Build and run the project

```
npm  start
```

- open the application

```
Run localhost:5000 on chrome browser.
```

## Project Structure

The folder structure of this app is explained below:

| Name                   | Description                                                                          |
| ---------------------- | ------------------------------------------------------------------------------------ |
| **node_modules**       | Contains all npm dependencies                                                        |
| **config**/mongoose.js | connect to mongoDB database via mongoose ORM.                                        |
| **controllers**        | Controllers define functions to serve various express routes.                        |
| **routes**             | Contain all express routes                                                           |
| **models**             | Models define schemas that will be used in storing and retrieving data from database |
| **middlewares**        | checking document ID is valid or not                                                 |
| server.js              | Entry point to express api                                                           |
| package.json           | Contains npm dependencies as well as build scripts                                   |
