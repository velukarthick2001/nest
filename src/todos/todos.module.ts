import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { TodosEntity } from "./todos.entity";
import { TodoService } from "./todos.service";
import { TodoController } from "./todos.controller";
import { NewEntity } from "src/new/new.entity";
import { NewService } from "src/new/new.service";
import { NewModule } from "src/new/new.module";

@Module({
    imports: [TypeOrmModule.forFeature([TodosEntity,NewEntity]),NewModule],
    providers: [TodoService,NewService],
    controllers: [TodoController]
}) 
export class TodosModule{

} 