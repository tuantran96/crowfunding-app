const { default: axios } = require("api/axios");

export const requestAuthRegister = (data) => {
  console.log(
    "🚀 ~ file: auth-requests.js:4 ~ requestAuthRegister ~ data:",
    data
  );
  return axios.post("/auth/register", {
    ...data,
  });
};

export const requestAuthLogin = (data) => {
  return axios.post("/auth/login", {
    ...data,
  });
};

export const requestAuthFetchMe = (token) => {
  if (!token) return;
  return axios.get("/me", {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};
