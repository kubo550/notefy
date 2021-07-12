export const generatePassword = (length: number) => {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz~!@-#$";

  const randomChar = () => chars[Math.floor(chars.length * Math.random())];

  const password = Array(length).fill("").map(randomChar).join("");
  return password;
};
