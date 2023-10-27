import crypto from 'crypto';
import multer from "multer";

import { extname, resolve } from 'path'

export default {
  upload(folder: string) {
    return {
      storage: multer.diskStorage({
        //__dirname é o diretorio onde estamos, .. <- qtas vezes se quer sair, folder é a pasta onde vamos entrar
        destination: resolve(__dirname, '..', '..', folder),
        filename: (request, file, callback) => {
          const fileHash = crypto.randomBytes(16).toString("hex");
          const fileName = `${fileHash}-${file.originalname}`

          return callback(null,fileName)
        }
      })
    }
  }
}