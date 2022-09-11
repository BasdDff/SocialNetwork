import { Injectable } from '@nestjs/common';
import {createPostDto} from "./dto/create-post.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Post, PostDocument} from "./schemas/post.schema";
import {Model, Types} from "mongoose";
import {FileService} from "../file/file.service";
import * as mongoose from "mongoose";
import {UserService} from "../users/user.service";

@Injectable()
export class PostService {
    constructor(@InjectModel(Post.name) private postModel: Model<PostDocument>, private fileService: FileService) {
    }

    async createPost(dto: createPostDto, image: any, userId: Types.ObjectId) {
        const fileName = await this.fileService.createFile(image)
        const post = await this.postModel.create({...dto, image: fileName, userId: userId})
        return post
    }

    async updatePost(post, body) {
        return post.updateOne({$set: body})
    }

    async getPostById (postId: string) {
        if (mongoose.Types.ObjectId.isValid(postId)) {
            return this.postModel.findById(postId)
        }
    }

    async deletePost(post) {
        return post.deleteOne()
    }

    async like(post, userId) {
        return post.updateOne({$push: {likes: userId}})
    }

    async dislike(post, userId) {
        return post.updateOne({$pull: {likes: userId}})
    }

    async getPostsByUserId(userId) {
        return this.postModel.find({userId: userId})
    }

    async getFriendPosts(friendId) {
        return this.postModel.find({userId: friendId})
    }
}
