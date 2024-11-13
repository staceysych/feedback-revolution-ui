const users = [
  {
    email: "rand@gmail.com",
    password: "password",
  },
  {
    email: "rand2@gmail.com",
    password: "password",
  },
  {
    email: "rand3@gmail.com",
    password: "password",
  },
];
export const getUserByEmail = (email: string) => {
  return users.find((user) => user.email === email);
};
