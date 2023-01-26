import { LoginFormType, RegisterFormType } from '../../../utils/types';

const URL = 'web-production-c89b.up.railway.app';

const signupAPI = async (formData: RegisterFormType) => {
  const response = await fetch(`${URL}/api/auth/signup`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return response;
};

const loginAPI = async (formData: LoginFormType) => {
  const response = await fetch(`${URL}/api/auth/login`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  return data;
};

const getUserAPI = async () => {
  const response = await fetch(`${URL}/api/auth/user`, {
    credentials: 'include',
  });
  const data = await response.json();
  return data;
};

const logoutAPI = async () => {
  const response = await fetch(`${URL}/api/auth/logout`, {
    credentials: 'include',
  });
  const data = await response.json();
  return data;
};

const authService = { signupAPI, loginAPI, getUserAPI, logoutAPI };
export default authService;
