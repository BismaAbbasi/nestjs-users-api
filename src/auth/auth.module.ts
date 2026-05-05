import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { MongooseModule } from '@nestjs/mongoose';
import { user, UserSchema } from 'src/user/Schema/user.schema';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { Jwtstrategy } from './jwt.strategy';
import { Adminseeds } from './admin.seed';

@Module({
  imports:
  [
    MongooseModule.forFeature([{name:'user',schema:UserSchema}]),
  JwtModule.registerAsync({
      imports: [ConfigModule],
      inject:[ConfigService],
      useFactory:(config:ConfigService)=>({
        secret:config.get('JWT_SECRET'),
        signOptions:{expiresIn:config.get('JWT_EXPIRES_IN')}
      })
  })
  ],
  
  controllers: [AuthController],
  providers: [AuthService,Jwtstrategy,Adminseeds],
    exports: [JwtModule]
})
export class AuthModule {}
