import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { NewService } from "./new.service";
import { NewEntity } from "./new.entity";

@Controller('todo')
export class NewController{

    constructor(private newService:NewService){}
    @Get()
    findAll(){
        return this.newService.getNew();
    }
@Get(':id')
getOne(@Param('id', ParseIntPipe) id){
    console.log(id,"11111");
    
    return this.newService.getOne(id);

}
@Post()
post(@Body() todo:NewEntity){
    return this.newService.postValue(todo)
}

@Delete(':id')
delTodo(@Param('id', ParseIntPipe) id){
    return this.newService.remove(id)
}

@Put(':id')
async updateRow(@Body() entity:NewEntity ,@Param('id',ParseIntPipe)id){
    return this.newService.update(id,entity)

}
}