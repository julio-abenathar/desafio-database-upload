import path from 'path';
import crypo from 'crypto';
import multer from 'multer';

const tmpFolder = path.resolve(__dirname, '..', '..', 'tmp');

export default {
  diretory: tmpFolder,

  storage: multer.diskStorage({
    destination: tmpFolder,
    filename(request, file, calback) {
      const fileHash = crypo.randomBytes(10).toString('HEX');
      const fileName = `${fileHash}-${file.originalname}`;

      return calback(null, fileName);
    },
  }),
};
