import { createReducer } from "../utils";
import { OActionTypes as contacts } from "./actions";

export const initialState = {
	info: { page: 1, results: 12 },
	data: [],
	load: false,
	error: false,
};

export const reducer = createReducer(initialState, {
	[contacts.GET_CONTACTS_REQUEST](state) {
		return { ...state, load: true, error: false };
	},
	[contacts.SET_CONTACTS](state, { payload }) {
		return {
			...state,
			load: false,
			error: false,
			info: payload.info,
			data: payload.data,			
		};
	},
	[contacts.SET_CONTACTS_ERROR](state) {
		return { ...state, load: false, error: true };
	},
});
