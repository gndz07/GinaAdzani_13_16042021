import { database } from './apiURL.js'

export const fetchUserData = async (token, endpoint) => {
	const myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);

	const requestOptions = {
		method: 'POST',
		headers: myHeaders,
		redirect: 'follow'
	};
		
	const userDataRequest = await fetch(`${database}/user/${endpoint}`, requestOptions);
	const userDataResult = await userDataRequest.json()
	.catch(error => console.log('error', error));

	return userDataResult.body;
}