import {Prop, Schema, SchemaFactory} from "@nestjs/mongoose";
import {Document} from "mongoose";
import {ApiProperty} from "@nestjs/swagger";
import * as mongoose from "mongoose"

export type PostDocument = Post & Document

@Schema()
export class Post extends mongoose.Document {

    @ApiProperty({example: '6308b748d6c1e29812db7f9e', description: "Email"})
    @Prop({
        type: String,
        required: true
    })
    userId: string

    @ApiProperty({example: 'its my post', description: "description post"})
    @Prop({
        type: String,
        max: 1500
    })
    description: string

    @ApiProperty({example: 'img.png', description: 'img'})
    @Prop({type: String})
    image: string


    @Prop({
        type: [],
        default: []
    })
    likes: []

}

export const PostSchema = SchemaFactory.createForClass(Post)