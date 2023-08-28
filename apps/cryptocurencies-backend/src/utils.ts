import * as bcryptjs from 'bcryptjs';

export const hash = (toHash: string, rounds: number) => {
  return bcryptjs.hashSync(toHash, rounds);
};

export const verifyHash = (toVerify: string, hashToVerify: string) => {
  return !!bcryptjs.compareSync(toVerify, hashToVerify);
};
