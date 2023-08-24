import { call, put } from "redux-saga/effects";
import {
  requestAuthFetchMe,
  requestAuthLogin,
  requestAuthRegister,
} from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";
import { authUpdateUser } from "./auth-slice";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new account successsfully");
    }
  } catch (error) {
    console.log("🚀 ~ file: auth-handlers.js:18 ~ error:", error);
  }
}

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
      yield call(handleAuthFetchMe, { payload: response.data.accessToken });
    }
    yield 1;
  } catch (error) {
    const response = error.response.data;
    if (response.statusCode === 403) {
      toast.error(response.error.message);
      return;
    }
  }
}

function* handleAuthFetchMe({ payload }) {
  try {
    const response = yield call(requestAuthFetchMe, payload);
    if (response.status === 200) {
      yield put(
        authUpdateUser({
          user: response.data,
          accessToken: payload,
        })
      );
    }
    // response.data -> userInfo
  } catch (error) {
    console.log("🚀 ~ file: auth-handlers.js:46 ~ error:", error);
  }
}

export { handleAuthLogin, handleAuthFetchMe };
