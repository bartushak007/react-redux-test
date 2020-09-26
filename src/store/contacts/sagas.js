import { all, call, put, take } from "redux-saga/effects";
import { getContactsList } from "services/getService";
import { getContactsRequest, setContacts, setContactsError } from "./actions";

export function* getContactsSaga() {
	while (true) {
		const { payload: requestData } = yield take(getContactsRequest);

		try {
			const data = yield call(
				getContactsList,
				new URLSearchParams(requestData)
			);

			yield put(setContacts(data));
		} catch (_) {
			yield put(setContactsError());
		}
	}
}

export default function* saga() {
	yield all([getContactsSaga()]);
}
