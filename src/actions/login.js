import { LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from './types.js';
import { database } from '../services/apiURL.js';
import { getToken } from '../services/getToken';

export const logInUser = (logInDetails) => async dispatch => {
	try {
		//get the token
		const tokenResult = await getToken(logInDetails);

		//fetch user data
		var myHeaders2 = new Headers();
		myHeaders2.append("Authorization", `Bearer ${tokenResult}`);

		var requestOptions2 = {
			method: 'POST',
			headers: myHeaders2,
			redirect: 'follow'
		};
		
		const userDataRequest = await fetch(`${database}/user/profile`, requestOptions2);
		const userDataResult = await userDataRequest.json();
		//dispatch action
		dispatch({
			type: LOG_IN_SUCCESS,
			payload: userDataResult.body,
			authToken: tokenResult,
			pass: logInDetails.password
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