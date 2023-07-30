# Polling System Backend

## About Project

Polling System Backend, an API where anyone can create questions with options and also add votes to it

## Getting Started

- clone the repository

```
git clone https://github.com/niteshgupta20/polling-system-backend.git
```

- create .env file
```
DB_URI="mongodb://127.0.0.1:27017/polling-system"
VOTE_URL="http://localhost:5000"
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
Run localhost:5000/api/v1/<route> on postman.
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

## Screenshots

### Create Question
![Create Question](https://github.com/niteshgupta20/polling-system-backend/blob/master/screenshots/create-question.PNG?raw=true)

### Create Option
![Create Option](https://github.com/niteshgupta20/polling-system-backend/blob/master/screenshots/add-option.PNG?raw=true)

### Add vote
![Add Vote](https://github.com/niteshgupta20/polling-system-backend/blob/master/screenshots/add-vote.PNG?raw=true)

###  Delete Question
![Delete Question](https://github.com/niteshgupta20/polling-system-backend/blob/master/screenshots/delete-question.PNG?raw=true)

###  Delete Option
![Delete Option](https://github.com/niteshgupta20/polling-system-backend/blob/master/screenshots/delete-option.PNG?raw=true)

###  View Question
![View Question](https://github.com/niteshgupta20/polling-system-backend/blob/master/screenshots/view-question.PNG?raw=true)