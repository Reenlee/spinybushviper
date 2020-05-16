import { verifyHeader } from '../../helpers/token';
import Invite from '../../models/invites';

export const handler = async evt => {
  try {
    const { headers } = evt;
    const auth = await verifyHeader(headers);

    const invites = await Invite.list({
      recipientId: auth.userId,
      active: true,
    });

    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(invites),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
