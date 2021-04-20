import { LOG_IN_SUCCESS, LOG_IN_FAIL } from './types.js';

export const logInUser = (logInDetails) => async dispatch => {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", "Basic c3RldmVAcm9nZXJzLmNvbTo=");
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify(logInDetails);

	var requestOptions = {
	  method: 'POST',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	const getToken = await fetch("http://localhost:3001/api/v1/user/login", requestOptions);
	const tokenResult = await getToken.json();

	//second request
	var myHeaders2 = new Headers();
	myHeaders2.append("Authorization", "Bearer " + tokenResult.body.token);

	var requestOptions2 = {
		method: 'POST',
		headers: myHeaders2,
		redirect: 'follow'
	};
	
	const userDataRequest = await fetch("http://localhost:3001/api/v1/user/profile", requestOptions2);
	const userDataResult = await userDataRequest.json();
	await dispatch({
		type: LOG_IN_SUCCESS,
		payload: userDataResult.body
	})
} 