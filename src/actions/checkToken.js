import { database } from './config.js';
import { REFRESH_TOKEN } from './types.js';

export const checkToken = (token, logInDetails) => dispatch => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const tokenExpiry = JSON.parse(jsonPayload);

    if (tokenExpiry < new Date().getTime()/1000) {
    	const myHeaders = new Headers();
		myHeaders.append("Content-Type", "application/json");

		const raw = JSON.stringify(logInDetails);

		const requestOptions = {
		  method: 'POST',
		  headers: myHeaders,
		  body: raw,
		  redirect: 'follow'
		};

		fetch(`${database}/user/login`, requestOptions)
		  .then(response => response.json())
		  .then(result =>
		  	dispatch({
		  		type: REFRESH_TOKEN,
		  		payload: result.body.token
		  	})
		  	)
		  .catch(error => console.log('error', error));
	}
};


