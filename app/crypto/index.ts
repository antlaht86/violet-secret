import invariant from "tiny-invariant";
import CryptoJS from "crypto-js";

export function encryptText(password: string, text: string) {
  return CryptoJS.AES.encrypt(text, password).toString();
}

export function decryptText(password: string, text: string) {
  const bytes = CryptoJS.AES.decrypt(text, password);
  return bytes.toString(CryptoJS.enc.Utf8);
}

export function encryptPassword(password: string) {
  invariant(process.env.SECRET_KEY, "process.env.SECRET_KEY is required");
  const key512Bits = CryptoJS.PBKDF2(password, process.env.SECRET_KEY, {
    keySize: 512 / 32,
  });
  return key512Bits.toString();
}
