const bcrypt = require('bcrypt');

export const passwordHelper = (password: string): Promise<string> => {
  return new Promise((resolve) => {
    const hash = bcrypt.hashSync(password, 10);
    resolve(hash);
  });
};

export const comparePassword = (
  password: string,
  hashedPassword: string,
): Promise<boolean> => {
  return new Promise((resolve) => {
    const result = bcrypt.compare(password, hashedPassword);
    resolve(result);
  });
};
