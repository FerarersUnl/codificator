import { AES, enc } from "crypto-js";

const secretKey = 'x/A?D(G+KbPdSgVkYp3s6v9y$B&E)H@M"';

export const encryptTextFromFile = (text) => {
    if(text.length <= 0) {
        return "Llena el campo para continuar"
    }
    const encryptedText = AES.encrypt(text, secretKey);
    return encryptedText;
};

export const decryptTextFromFile = (text) => {
    if(text.length <= 0) {
        return "Llena el campo para continuar"
    }
    const decryptedKey = AES.decrypt(text, secretKey);
    const decryptedText = decryptedKey.toString(enc.Utf8);
    return decryptedText;
};

