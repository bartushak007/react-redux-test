import { createAction } from "../utils";

const GET_CONTACTS_REQUEST = "CONTACTS/GET_CONTACTS";
const SET_CONTACTS = "CONTACTS/SET_CONTACTS";
const SET_CONTACTS_ERROR = "CONTACTS/SET_CONTACTS_ERROR";

export const OActionTypes = {
	// prefix: "@contacts",
	GET_CONTACTS_REQUEST,
	SET_CONTACTS,
	SET_CONTACTS_ERROR,
};

export const getContactsRequest = createAction(GET_CONTACTS_REQUEST);
export const setContacts = createAction(SET_CONTACTS);
export const setContactsError = createAction(SET_CONTACTS_ERROR);
