import { Module } from '@nestjs/common';
import { VideoModule } from './video/video.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ 
    MongooseModule.forRoot('mongodb://root:example@127.0.0.1:27017', { dbName: 'meddit_video_db' }),
    VideoModule
  ],
})

export class AppModule {}
