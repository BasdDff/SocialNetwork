    import {Module} from "@nestjs/common";
import {AppController} from "./app.controller";
import {AppService} from "./app.service";
import {UserModule} from "./users/user.module";
import {MongooseModule} from "@nestjs/mongoose";
import { RoleModule } from './roles/role.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { FileModule } from './file/file.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from "path"
import {ConfigModule} from "@nestjs/config";

@Module({
    controllers: [AppController],
    providers: [AppService],
    imports: [
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`
        }),
        ServeStaticModule.forRoot({rootPath: path.resolve(__dirname, 'static')}),
        MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.y8oifnm.mongodb.net/social?retryWrites=true&w=majority'),
        UserModule,
        RoleModule,
        AuthModule,
        PostModule,
        FileModule
    ]
})
export class AppModule {

}