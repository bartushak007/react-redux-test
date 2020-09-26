import { all, call, put, take, select } from "redux-saga/effects";
import { getContactsList } from "services/getService";
import { getContactsRequest, setContacts, setContactsError } from "./actions";
import { getContactsState } from "./selectors";
import { notification } from "antd";

export function* getContactsSaga() {
	while (true) {
		const { payload: requestData } = yield take(getContactsRequest);

		const {
			info: { page: infoPage, results: infoResults },
		} = yield select(getContactsState);

		const { page: requestPage } = requestData;
		const { results: requestResults } = requestData;

		const page = requestPage || infoPage;
		const pageSize = requestResults || infoResults;

		try {
			const data = yield call(
				getContactsList,
				new URLSearchParams({ results: pageSize, page })
			);

			const { results, info } = data.data;

			yield put(setContacts({ data: results, info }));
		} catch (_) {
			yield put(setContactsError());
			notification.open({
				type: "error",
				message: "Load contacts error",
				description: "Check your network connection",
			});
		}
	}
}

export default function* saga() {
	yield all([getContactsSaga()]);
}
