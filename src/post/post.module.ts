import {forwardRef, Module} from '@nestjs/common';
import {PostService} from './post.service';
import {PostController} from './post.controller';
import {MongooseModule} from "@nestjs/mongoose";
import {Post, PostSchema} from "./schemas/post.schema";
import {FileModule} from "../file/file.module";
import {AuthModule} from "../auth/auth.module";
import {UserModule} from "../users/user.module";

@Module({
    imports: [
        MongooseModule.forFeature([{name: Post.name, schema: PostSchema}]),
        FileModule,
        UserModule,
        forwardRef(() => AuthModule)
    ],
    providers: [PostService],
    controllers: [PostController]
})
export class PostModule {

}
