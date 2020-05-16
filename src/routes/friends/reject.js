import { verifyHeader } from '../../helpers/token';
import Invite from '../../models/invites';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const data = JSON.parse(body);
    const { username } = data;

    const auth = await verifyHeader(headers);

    const reject = await Invite.delete({ username, recipientId: auth.userId });

    console.log(reject);
    return {
      statusCode: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify(reject),
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
