# MEAN crud app with Angular 6

This is a simple CRUD app for user management based on MEAN stack with Angular6 on the board. 

## Installation

To run project install and setup the following:
* Install MongoDB;
* Set MONGODB_URI system variable to desired database uri, if not defined default `127.0.0.1:27017/mean-crud-app` uri will be used;
* Install angular cli `npm install -g @angular/cli`  
* Install app dependencies `npm install`
* Run mongodb e.g. to run a mongodb process as a daemon execute this command `mongod --dbpath mongo/data`
* Note: npm version > 7.6.0 (async/await support is necessary). Developed on v9.8.0; 

## Development server - frontend

Run `npm run client` for a dev frontend server. Navigate to `http://localhost:4200/`. 
The app will automatically reload if you change any of the source files.

## Development server - backend 

Run `npm run server` for a dev backend server. 
The server will automatically reload if you change any of the files from api directory.  
In order to check if api response type `curl -i localhost:3000/api/users` command in terminal/

## Build and run app
Run `npm start`. It will build frontend and run server on `http://localhost:3000` 

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## App screenshots

### Users list:
* features: sort, filter, paginate 
![picture alt](http://crud.miwu.pl/crud-list.png "Users list")

### User form:
* features: add, edit, upload image, select date via datepicker, validation (client & server side)
![picture alt](http://crud.miwu.pl/crud-user-form.png "User form")
