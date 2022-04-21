import { Module } from '@nestjs/common';
import { VideoController } from './video.controller';
import { MulterModule } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { MongooseModule } from '@nestjs/mongoose';
import { Video, videoSchema } from './schemas/video.schema';
import { VideoService } from './video.service';

@Module({
  imports: [
    MulterModule.register({
      storage: diskStorage({ 
        destination: function (req, file, next) {
          next(null, './files')
        },
        filename: function (req, file, next) {
          const uniqueSuffix = file.originalname;
          next(null, uniqueSuffix)
        }
      })
    }),
    MongooseModule.forFeature([{ name: Video.name, schema: videoSchema }])
  ],
  controllers: [VideoController],
  providers: [VideoService]
})
export class VideoModule {}
