import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TodosModule } from './todos/todos.module';
import { NewModule } from './new/new.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [   
    ConfigModule.forRoot(),
    
    TypeOrmModule.forRoot({
    "type": "mysql", 
    "host": "localhost",
    "port": 3306,
    "username": "root", 
    "password": "dev@PASSWORD2023",
   
    "database":"nest",
    "entities": ["dist/**/*.entity{.ts,.js}"],
    "synchronize": true
}), 
TodosModule  ,
NewModule,
UsersModule
],
  controllers: [AppController],
  providers:[AppService]
})
export class AppModule {}
