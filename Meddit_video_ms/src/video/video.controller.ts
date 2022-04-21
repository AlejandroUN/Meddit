import {
  Body,
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  UploadedFile,
  UseInterceptors,
  Response,
  StreamableFile,
  Param,
  Request
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { createReadStream } from 'fs';
import { diskStorage } from 'multer';
import path, { join } from 'path';
import { CreateVideoDto } from './dto/create-video.dto';
import { UpdateVideoDto } from './dto/update-video.dto';
import { Video } from './schemas/video.schema';
import { VideoService } from './video.service';

@Controller('video')
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @UseInterceptors(FileInterceptor('file'))
  @Post('')
  async uploadVideo(
    @Body() body: CreateVideoDto,
    @UploadedFile() file: Express.Multer.File
  ) {
    console.log(file)
    body.path = join( process.cwd() as any, 'files', file.originalname);
    const createdVideo = await this.videoService.createVideo(body);
    return createdVideo;
  }

  @Get('stream/:id')
  async getVideoStream(@Param('id') id: string) {
    const video = await this.videoService.getVideoData(id);
    const file = createReadStream(video.path);
    return new StreamableFile(file);
  }

  @Get('data/:id')
  getVideoData(@Param('id') id: string): Promise<Video> {
    return  this.videoService.getVideoData(id);
  }

  @Put('data/:id')
  updateVideoData(@Body() body: UpdateVideoDto) {
    return this.videoService.updateVideo(body);
  }

  @Delete(':id')
  deleteVideo(@Param('id') id: string) {
    return this.videoService.deleteVideo(id);
  }
}
