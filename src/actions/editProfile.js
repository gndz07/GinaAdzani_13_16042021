import { EDIT_PROFILE } from './types.js';

export const editProfile = (firstName, lastName) => dispatch => {
	dispatch({
		type: EDIT_PROFILE,
		payload: {
			firstName: firstName,
			lastName: lastName
		}
	})
}