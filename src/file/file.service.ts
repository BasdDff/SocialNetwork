import {HttpException, HttpStatus, Injectable} from '@nestjs/common';
import * as fs from 'fs'
import * as path from 'path'
import * as uuid from "uuid"

export enum FileType {
    IMAGE = "image"
}

@Injectable()
export class FileService {
    async createFile(file): Promise<string> {
        try {
            const fileExtension = file.originalname.split(".").pop()
            const fileName = uuid.v4() + '.' + fileExtension
            const filePath = path.resolve(__dirname, '..', 'static')
            if (!fs.existsSync(filePath)) {
                fs.mkdirSync(filePath, {recursive: true})
            }
            fs.writeFileSync(path.join(filePath, fileName), file.buffer)
            return fileName
        } catch (err) {
            throw new HttpException('Произошла ошибка при записи файла', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}
