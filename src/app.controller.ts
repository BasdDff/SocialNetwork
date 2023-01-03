import {Controller, Get} from "@nestjs/common";
import {AppService} from "./app.service";
import {ApiOperation} from "@nestjs/swagger";

@Controller('/api')
export class AppController {
    constructor(private appService: AppService) {
    }

    @ApiOperation({summary: 'Test request'})
    @Get()
    getTest() {
        return this.appService.getTestInfo()
    }
}