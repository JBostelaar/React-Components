import * as c from 'app/constants';

export const initialState = {
	success: false,
};

export default function loginReducer(state = initialState, action) {
	if (action.type === c.SET_LOGIN_SUCCESS) {
		return {
			...state,
			success: true,
		};
	}

	return state;
}
