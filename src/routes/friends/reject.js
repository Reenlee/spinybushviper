import { verifyHeader } from '../../helpers/token';
import Invite from '../../models/invites';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const data = JSON.parse(body);
    const { username } = data;

    await verifyHeader(headers);

    const reject = await Invite.delete({ username });

    return {
      statusCode: 200,
      body: JSON.stringify(reject),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
