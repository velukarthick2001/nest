import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { TodoService } from "./todos.service";
import { TodosEntity } from "./todos.entity";
import { NewEntity } from "src/new/new.entity";
import { NewService } from "src/new/new.service";

@Controller('todo')
export class TodoController{

    constructor(private todoService:TodoService,private newService:NewService){}
    @Get()
    findAll(){
        return this.todoService.getTodos();
    }

@Get('/new')
getNew(){
    return this.newService.getNew()
}

@Get('/aaa')
getServ(){
    return this.todoService.getNew()
}

@Get(':id')
getOne(@Param('id', ParseIntPipe) id){
    console.log(id,"11111");
    
    return this.todoService.getOne(id);

}
@Post()
post(@Body() todo:TodosEntity){
    return this.todoService.postValue(todo)
}

@Delete(':id')
delTodo(@Param('id', ParseIntPipe) id){
    return this.todoService.remove(id)
}

@Put(':id')
async updateRow(@Body() entity:TodosEntity ,@Param('id',ParseIntPipe)id){
    return this.todoService.update(id,entity)

}

@Put('/cross/:id')
async crossUpdate(@Body() newEntity:NewEntity,@Param('id',ParseIntPipe)id){
    return this.todoService.updateAnother(id,newEntity)
} 

@Post('/update') 
async crossAllUpdate(@Body() newEntity:NewEntity){
    console.log("enters");
    
    console.log(newEntity,"0000000000000000000");
    
    return this.todoService.updateAllToAnother(newEntity)
   
    
}

@Post('/inter')
async interchange(@Body() newe:NewEntity,@Body()todoe:TodosEntity){
    return this.todoService.interchange(newe,todoe)
}

} 