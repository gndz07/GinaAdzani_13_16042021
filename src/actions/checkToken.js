import { REFRESH_TOKEN, LOG_OUT } from './types.js';
import { getToken } from '../services/getToken';

export const checkToken = (token, logInDetails) => async dispatch => {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    const tokenExpiry = JSON.parse(jsonPayload);

    if (tokenExpiry < new Date().getTime()/1000) {
    	try {
    		//fetch new token
	    	const token = await getToken(logInDetails);
			//replace token in the state
			dispatch({
			  	type: REFRESH_TOKEN,
			  	payload: token
			})
    	} catch(e) {
			dispatch({
				type: LOG_OUT
			})
		}
	}
};
