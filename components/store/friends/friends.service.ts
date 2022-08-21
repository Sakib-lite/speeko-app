import { Invitation } from '../../../utils/types';

const URL = 'http://localhost:5000';

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

const friendService = { sendInvitationAPI };

export default friendService;
