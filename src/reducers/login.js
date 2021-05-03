import { LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT, EDIT_PROFILE, REFRESH_TOKEN } from '../actions/types';

const initialState = {
	authToken: '',
	pass: '',
	user: {},
	isLoggedIn: false,
	message: ""
};

export default function login (state = initialState, action) {
	switch (action.type) {
		case LOG_IN_SUCCESS:
			return {
				...state,
				authToken: action.authToken,
				pass: action.pass,
				user: action.payload,
				isLoggedIn: true,
				message: "Log in success!"
			};
		case LOG_IN_FAIL:
			return {
				...state,
				message: "Log in failed!"
			};
		case REFRESH_TOKEN:
			return {
				...state,
				authToken: action.payload
			}
		case LOG_OUT:
			return {
				...initialState
			};
		case EDIT_PROFILE:
			return {
				...state,
				user: {
					...state.user,
					firstName: action.payload.firstName,
					lastName: action.payload.lastName
				}
			};
		default:
			return state;
	}
}