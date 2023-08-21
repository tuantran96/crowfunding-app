import { call } from "redux-saga/effects";
import { requestAuthRegister } from "./auth-requests";
import { toast } from "react-toastify";

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
