import { database } from './apiURL.js'

export const putRequest = async (token, payload, endpoint) => {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(payload);

	var requestOptions = {
	  method: 'PUT',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	const request = await fetch(`${database}/user/${endpoint}`, requestOptions);
	const result = await request.json()
	.catch(error => console.log('error', error));

	return result;
}