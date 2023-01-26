import { Invitation } from '../../../utils/types';
import Snackbar from './../../../utils/notistack';

const URL = 'web-production-c89b.up.railway.app';

export const sendInvitationAPI = async (form: Invitation) => {
  const response = await fetch(`${URL}/api/friend/invite`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });

  return response;
};

export const getInvitationAPI = async () => {
  const response = await fetch(`${URL}/api/friend/invite`, {
    credentials: 'include',
  });
  return response.json();
};

export const acceptInvitationAPI = async (email: string) => {
  const response = await fetch(`${URL}/api/friend/accept-invitation`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  return response;
};

export const declineInvitationAPI = async (email: string) => {
  const response = await fetch(`${URL}/api/friend/decline-invitation`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  return response;
};
export const unfriendApi = async (id: string) => {
  try {
    const response = await fetch(`${URL}/api/friend/unfriend`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();

    if (data.status === 'success') {
      Snackbar.success(data.message);
    }
    return data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    Snackbar.error(err.message);
    console.log(err);
  }
};
const friendService = {
  sendInvitationAPI,
  getInvitationAPI,
  acceptInvitationAPI,
  declineInvitationAPI,
  unfriendApi,
};

export default friendService;
