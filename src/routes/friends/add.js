import { verifyHeader } from '../../helpers/token';
import User from '../../models/users';
import Invite from '../../models/invites';

export const handler = async evt => {
  try {
    const { headers, body } = evt;
    const data = JSON.parse(body);

    const auth = await verifyHeader(headers);

    const { username } = data;
    const friend = await User.find({ username });
    await User.push({ id: auth.userId }, { friends: friend.id });
    await User.push({ id: friend.id }, { friends: auth.userId });
    await Invite.delete({ senderId: friend.id, recipientId: auth.userId });

    return {
      statusCode: 200,
      body: JSON.stringify(friend),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err, ['name', 'message']),
    };
  }
};
