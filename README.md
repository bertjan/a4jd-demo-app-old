# Angular for Java developers - demo application

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).



## Steps to recreate this app
Install Angular CLI:
`npm install -g @angular/cli` 

Generate new app, open in IDE:  
`ng new demo-app`  
`cd demo-app`  
`idea .`

Edit gitignore  
Look at project structure

`ng serve`

Open app at `http://localhost:4200`

Test/lint app:  
`ng test`  
`ng e2e`  
`ng lint`

Add Angular material:  
`ng add @angular/material`  
`npm add @angular/cdk@latest`

Generate navigation component:  
`ng generate @angular/material:material-nav --name navigation`

Cleanup navigation component a bit

Generate home component:  
`ng generate component home`  
    
Move home screen to home component  

Edit app component: add container div, height 100vh

Add routing  
Change navigation links to [routerLink]'s  

Generate dashboard/grid:  
`ng generate @angular/material:material-dashboard --name dashboard`

Add dashboard to routes

Generate table:  
`ng generate @angular/material:material-table --name talks`

Start backend (https://github.com/bertjan/a4jd-demo-backend)

Generate service:  
`ng generate service talks/talks`

Update talks component: use service to fetch data from backend 

Create production build:  
`ng build --aot --prod` 

Navigate to directory `dist/demo-app` 
Start production build in nginx:   
`docker run --mount type=bind,source="$(pwd)",target=/usr/share/nginx/html -p 80:80 nginx`
