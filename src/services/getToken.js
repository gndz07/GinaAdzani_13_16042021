import { database } from './apiURL.js'

export const getToken = async (logInDetails) => {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(logInDetails);

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		const response = await fetch(`${database}/user/login`, requestOptions);
		const tokenResult = await response.json()
		.catch(error => console.log('error', error));

		return tokenResult.body.token;
}