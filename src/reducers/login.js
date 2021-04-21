import { LOG_IN_SUCCESS, LOG_IN_FAIL, LOG_OUT } from '../actions/types';

const initialState = {
	user: {},
	isLoggedIn: false,
	message: ""
};

export default function login (state = initialState, action) {
	switch (action.type) {
		case LOG_IN_SUCCESS:
			return {
				...state,
				user: action.payload,
				isLoggedIn: true,
				message: "Log in success!"
			};
		case LOG_IN_FAIL:
			return {
				...state,
				message: "Log in failed!"
			};
		case LOG_OUT:
			return {
				...initialState
			};
		default:
			return state;
	}
}