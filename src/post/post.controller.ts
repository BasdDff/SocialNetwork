import {
    Body,
    Controller, Delete, Get,
    HttpException, HttpStatus,
    Param,
    Post,
    Put,
    Req,
    UploadedFile,
    UseGuards,
    UseInterceptors
} from '@nestjs/common';
import {createPostDto} from "./dto/create-post.dto";
import {PostService} from "./post.service";
import {FileInterceptor} from "@nestjs/platform-express";
import {JwtAuthGuard} from "../auth/jwt-auth.guard";
import {UserDecorator} from "../auth/user.decorator";
import {UserEntity} from "../users/types/UserEntity";
import {Request} from 'express'
import {UserService} from "../users/user.service";
import {ApiTags} from "@nestjs/swagger";

@ApiTags('Post')
@Controller('post')
export class PostController {
    constructor(private postService: PostService, private userService: UserService) {
    }

    @UseGuards(JwtAuthGuard)
    @Get('/timeline')
    async getTimeline(@UserDecorator() user: UserEntity) {
        const currentUserPosts = await this.postService.getPostsByUserId(user._id)
        const friendPosts = await Promise.all(
            user.followings.map((friendId) => {
                return this.postService.getFriendPosts(friendId)
            })
        )
        return currentUserPosts.concat(...friendPosts)
    }

    @UseGuards(JwtAuthGuard)
    @Put(':postId')
    async updatePost(@Param('postId') postId: string, @Req() request: Request, @UserDecorator() user: UserEntity) {
        const post = await this.postService.getPostById(postId)
        if (user._id.toString() === post.userId) {
            await this.postService.updatePost(post, request.body)
            return "the post has been updated"
        } else {
            throw new HttpException('You can update only your post', HttpStatus.FORBIDDEN ) //403
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post()
    @UseInterceptors(FileInterceptor('image'))
    createPost(@Body() dto: createPostDto, @UploadedFile() image, @UserDecorator() user: UserEntity) {
        return this.postService.createPost(dto, image, user._id)
    }

    @UseGuards(JwtAuthGuard)
    @Delete(':postId')
    async deletePost(@Param('postId') postId: string, @UserDecorator() user: UserEntity) {
        const post = await this.postService.getPostById(postId)
        if (user._id.toString() === post.userId) {
            await this.postService.deletePost(post)
            return "the post has been deleted"
        } else {
            throw new HttpException('You can delete only your post', HttpStatus.FORBIDDEN ) //403
        }
    }

    @UseGuards(JwtAuthGuard)
    @Post('/like/:postId')
    async like(@Param('postId') postId: string, @UserDecorator() user: UserEntity) {
        const post = await this.postService.getPostById(postId)
        console.log(post)
        // @ts-ignore
        if (!post.likes.includes(user._id.toString())) {
            await this.postService.like(post, user._id)
            return "the post has been liked"
        } else {
            // @ts-ignore
            await this.postService.dislike(post, user._id)
            return "the post has been disliked"
        }
    }

    @Get(':postId')
    async getPostById(@Param('postId') postId: string) {
        const post = await this.postService.getPostById(postId)
        return post
    }

    @UseGuards(JwtAuthGuard)
    @Get('/posts/:userId')
    async getPostsByUserId(@Param('userId') userId: string, @UserDecorator() user: UserEntity) {
         if (userId) {
            const foundUser = await this.userService.getUserById(userId)
            const userPosts = await this.postService.getPostsByUserId(foundUser._id)
            return userPosts
        } else if (user._id) {
            const foundUser = await this.userService.getUserById(user._id)
            const userPosts = await this.postService.getPostsByUserId(foundUser._id)
            return userPosts
        }
    }

}
