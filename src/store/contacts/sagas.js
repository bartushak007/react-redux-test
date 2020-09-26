import { all, call, put, take, select } from "redux-saga/effects";
import { getContactsList } from "services/getService";
import { getContactsRequest, setContacts, setContactsError } from "./actions";
import { getContactsState } from "./selectors";

export function* getContactsSaga() {
	while (true) {
		const { payload: requestData } = yield take(getContactsRequest);
		const {
			pageSize,
			info: { page: infoPage },
		} = yield select(getContactsState);
		const { page: requestPage } = requestData;

		const page = requestPage || infoPage;
		try {
			const data = yield call(
				getContactsList,
				new URLSearchParams({ results: pageSize, page })
			);

			const { results, info } = data.data;

			yield put(setContacts({ data: results, info }));
		} catch (_) {
			yield put(setContactsError());
		}
	}
}

export default function* saga() {
	yield all([getContactsSaga()]);
}
