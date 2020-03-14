import { connectDB } from './mongodb';

export const handler = async () => {
  try {
    const x = { username: 'i do not know', passowrd: 'something secret' };

    const db = await connectDB('test');
    await db.insertOne(x);

    return {
      statusCode: 200,
      body: JSON.stringify(x),
    };
  } catch (err) {
    console.log(err);
    return {
      statusCode: 500,
      body: JSON.stringify(err),
    };
  }
};
