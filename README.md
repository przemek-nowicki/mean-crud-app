# mean-crud-app

This is a simple CRUD app based on MEAN stack. 

## Installation

To run project install and setup the following:
* Install MongoDB;
* Set MONGODB_URI system variable to desired database uri, if not defined `127.0.0.1:27017/mean-crud-app` uri will be used;
* Install angular cli `npm install -g @angular/cli`  
* note: npm version > 7.6.0 (async/await support is necessary). Developed on v9.8.0;

## Development server - frontend

Run `npm start` or `npm  serve` for a dev frontend server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development server - backend 

Run `npm run server` for a dev backend server. The server will automatically reload if you change any of the files from api directory.  
In order to check if api response type `curl -i localhost:3000/api/users` command in terminal/

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## App screenshots

Users list:
![picture alt](http://crud.miwu.pl/crud-list.png "Users list")
User form:
![picture alt](http://crud.miwu.pl/crud-form.png "User form")
