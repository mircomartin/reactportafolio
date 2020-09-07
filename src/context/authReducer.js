import { types } from './types';

export default (state, action) => {
	switch (action.type) {
		case types.login:
			return {
				user: {
					name: action.payload.name,
					uid: action.payload.uid,
				},
				logged: true,
			};
		case types.logout:
			return {
				logged: null,
            };
        case types.listNews:
            return {
                ...state,
                news: action.payload,
            };
		case types.newNotice:
			return {
				...state,
				news: [...state.news, action.payload],
			};
		default:
			return state;
	}
};
