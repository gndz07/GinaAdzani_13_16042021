import { LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from './types.js';
import { getToken } from '../services/getToken.js';
import { fetchUserData } from '../services/fetchUserData.js';

export const logInUser = (logInDetails, remember) => async dispatch => {
	try {
		//get the token
		const token = await getToken(logInDetails);

		//fetch user data
		const userData = await fetchUserData(token, "profile");
		//dispatch action
		dispatch({
			type: LOG_IN_SUCCESS,
			payload: userData,
			authToken: token,
			pass: logInDetails.password,
			remember: remember
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