# Argent Bank App

Bank application that lets user to log in and see their profile.

Data was fetched from an external NodeJS server.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Prerequisites

- [npm](https://www.npmjs.com/) v6.14.11

- [NodeJS](https://nodejs.org/en/) v.14.16.0

## Dependencies

- [React](https://reactjs.org/) v17.0.1

- [Redux](https://redux.js.org/) v4.0.5

- [react-redux](https://react-redux.js.org/) v7.2.3

- [react-router-dom](https://reactrouter.com/web/guides/quick-start) v5.2.0

- [redux-thunk](https://github.com/reduxjs/redux-thunk) v2.3.0

- [redux-persist](https://www.npmjs.com/package/redux-persist) v6.0.0

- [prop-types](https://www.npmjs.com/package/prop-types) v15.7.2

## Database

Clone this [external NodeJS server](https://github.com/OpenClassrooms-Student-Center/Project-10-Bank-API) for the micro API of this project.

## Install this project on your local

- Fork this repository

- Clone to your local on a directory of your choice.

- From the terminal, change directory to the cloned project directory.

- Install with command `npm i`

- Run the project with command `npm start`

The project will run in `http://localhost:3000` (reserve port 3001 for micro API)

## Existing path

- For the time being, the existing paths are:
	- `http://localhost:3000/` for homepage
	- `http://localhost:3000/login` for login page
	- `http://localhost:3000/user/profile` for user profile page, only accessible after a succesful login authentification
