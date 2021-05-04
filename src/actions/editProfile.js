import { EDIT_PROFILE } from './types.js';
import { putRequest } from '../services/putRequest.js';
import { database } from './config.js'

export const editProfile = (token, newName) => async dispatch => {
	try {
		//send PUT request
		const editNameRequest = await putRequest(token, newName, "profile");
		//change state
		dispatch({
			type: EDIT_PROFILE,
			payload: {
				firstName: newName.firstName,
				lastName: newName.lastName
			}
		})
	} catch(e) {
		console.log("Fail to edit profile");
	}	
}