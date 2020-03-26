import * as jwt from 'jsonwebtoken';
import { JWT_PASSWORD } from '../contants';

export function encode(data) {
  return jwt.sign(data, JWT_PASSWORD);
}

function verifyBearerHeader(bearerHeader = '') {
  const parts = bearerHeader.split(' ');
  if (parts.length === 2) {
    const scheme = parts[0];
    const token = parts[1];
    if (/^Bearer$/i.test(scheme)) {
      return jwt.verify(token, JWT_PASSWORD);
    }
  }
  throw new Error();
}

export function verifyHeader({ Authorization }) {
  const auth = verifyBearerHeader(Authorization);
  delete global.auth;
  global.auth = auth;
  return auth;
}
