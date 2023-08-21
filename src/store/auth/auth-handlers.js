import { call } from "redux-saga/effects";
import { requestAuthLogin, requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";
import { saveToken } from "utils/auth";

export default function* handleAuthRegister(action) {
  const { payload } = action;
  try {
    const response = yield call(requestAuthRegister, payload);
    if (response.status === 201) {
      toast.success("Created new account successsfully");
    }
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:13 ~ function*handleAuthRegister ~ error:",
      error
    );
  }
}

function* handleAuthLogin({ payload }) {
  try {
    const response = yield call(requestAuthLogin, payload);
    console.log(
      "🚀 ~ file: auth-handlers.js:23 ~ function*handleAuthLogin ~ response:",
      response
    );
    if (response.data.accessToken && response.data.refreshToken) {
      saveToken(response.data.accessToken, response.data.refreshToken);
    }
    yield 1;
  } catch (error) {
    console.log(
      "🚀 ~ file: auth-handlers.js:28 ~ function*handleAuthLogin ~ error:",
      error
    );
  }
}

export { handleAuthLogin };
