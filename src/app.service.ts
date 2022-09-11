import {Injectable} from "@nestjs/common";

@Injectable()
export class AppService {
    getTestInfo(): string {
        return "get info"
    }
}