import jwt from 'jsonwebtoken';

const SECRET_KEY: string = "thisisasecretkeyforjsonwebtoken";

export function createAccessToken(payload: any) {
  return new Promise((resolve, reject) => {
    jwt.sign(payload, SECRET_KEY, { expiresIn: '1d' }, (err, token) => {
      if (err) reject(err);
      resolve(token);
    });
  })
}