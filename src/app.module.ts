// src/app.module.ts

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './user/user.entity'; // Create this User entity later
import { UserModule } from './user/user.module'; // Create this User module later
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Meera@postgres',
      database: 'nest_helloworld_db',
      entities: [User], // Make sure your entity path is correct
      synchronize: true, // Set this to false in production
    }),
    UserModule, // Import your UserModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
