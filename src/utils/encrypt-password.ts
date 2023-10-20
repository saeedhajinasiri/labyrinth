const bcrypt = require('bcrypt');

export const encryptPassword = (password: string): Promise<string> => {
  return new Promise((resolve) => {
    const hash = bcrypt.hashSync(password, 10);
    resolve(hash);
  });
};
