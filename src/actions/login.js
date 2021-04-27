import { LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from './types.js';
import { database } from './config.js'

export const logInUser = (logInDetails) => async dispatch => {
	try {
		var myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		var raw = JSON.stringify(logInDetails);

		var requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		const getToken = await fetch(`${database}/user/login`, requestOptions);
		const tokenResult = await getToken.json();

		//second request
		var myHeaders2 = new Headers();
		myHeaders2.append("Authorization", `Bearer ${tokenResult.body.token}`);

		var requestOptions2 = {
			method: 'POST',
			headers: myHeaders2,
			redirect: 'follow'
		};
		
		const userDataRequest = await fetch(`${database}/user/profile`, requestOptions2);
		const userDataResult = await userDataRequest.json();
		dispatch({
			type: LOG_IN_SUCCESS,
			payload: userDataResult.body,
			authToken: tokenResult.body.token
		})
	} catch(e) {
		dispatch({
			type: LOG_IN_FAIL
		})
	}
}

export const logOutUser = () => dispatch => {
	dispatch({
		type: LOG_OUT
	})
}