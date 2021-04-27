import { EDIT_PROFILE } from './types.js';
import { database } from './config.js'

export const editProfile = (token, firstName, lastName) => dispatch => {
	var myHeaders = new Headers();
	myHeaders.append("Authorization", `Bearer ${token}`);
	myHeaders.append("Content-Type", "application/json");

	var raw = JSON.stringify({
	  "firstName": firstName,
	  "lastName": lastName
	});

	var requestOptions = {
	  method: 'PUT',
	  headers: myHeaders,
	  body: raw,
	  redirect: 'follow'
	};

	fetch(`${database}/user/profile`, requestOptions)
	  .then(response => response.text())
	  .then(
	  	dispatch({
			type: EDIT_PROFILE,
			payload: {
				firstName: firstName,
				lastName: lastName
			}
		}))
	  .catch(error => console.log('error', error));

}