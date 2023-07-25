import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { NewEntity } from "./new.entity";
import { NewService } from "./new.service";
import { NewController } from "./new.controller";
import { TodoService } from "src/todos/todos.service";
import { TodosEntity } from "src/todos/todos.entity";

@Module({
    imports: [TypeOrmModule.forFeature([NewEntity,TodosEntity]),TodosEntity],
    providers: [NewService,TodoService],
    controllers: [NewController],
    exports:[NewService]
})
export class NewModule{

} 