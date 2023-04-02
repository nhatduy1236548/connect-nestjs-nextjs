import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './modules/auth/user.entity';
import { ViewModule } from './modules/view/view.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [ViewModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password:'postgress',
      database: 'task-management',
      entities: [User],
      autoLoadEntities:true,
      synchronize:true,
    })
  ],
})
export class AppModule {}
