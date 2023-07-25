import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { NewEntity } from "./new.entity";
import { Repository } from "typeorm";
import { TodoService } from "src/todos/todos.service";

@Injectable()
export class NewService{

    constructor(@InjectRepository(NewEntity) private newRepository:Repository<NewEntity>,
    ){    }
async getNew():Promise<NewEntity[]> {
return await this.newRepository.find();

}

async getOne(id:number):Promise<NewEntity>{
    console.log(id) 
   
    return await this.newRepository.findOne({ where: { id } })
}

async postValue(NewEntity:NewEntity){
    return await this.newRepository.save(NewEntity)
}

async remove(id: number): Promise<void> {
    await this.newRepository.delete(id);
  }

async update(id:number ,entity:NewEntity){
   const updateRow = await this.newRepository.findOne({where:{id}})
   if(!updateRow){
    throw new NotFoundException(' New Table la value illa bro ')
   } 
   console.log(updateRow,"################");
   console.log(entity,"!!!!!!!!!!!!!!!!!!!");
   
   
   updateRow.title = entity.title;
   updateRow.description = entity.description
   await this.newRepository.save(updateRow)
  
   return updateRow;
}




}