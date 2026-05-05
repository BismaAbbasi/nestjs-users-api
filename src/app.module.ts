import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';
import { config } from 'process';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [UserModule,ConfigModule.forRoot({
    isGlobal:true
  }),
  MongooseModule.forRoot(process.env.MONGO_URL!),
  AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
