import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersRepository } from './auth.repository';
import { User } from './user.entity';
import { LoggerMiddleware } from './middleware/auth.middleware';
import * as morgan from 'morgan';

@Module({
  imports:[ TypeOrmModule.forFeature([User, UsersRepository])],
  controllers: [AuthController],
  providers: [ AuthService, LoggerMiddleware],
})
export class AuthModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // Sử dụng middleware cho toàn bộ ứng dụng
    consumer
    .apply(
      LoggerMiddleware
      //morgan('dev')
      )
      .forRoutes({
        path: '*',
        method: RequestMethod.ALL,
      });
  }
}
