import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { TodosEntity } from "./todos.entity";
import { Repository } from "typeorm";
import { NewEntity } from "src/new/new.entity";
import { NewService } from "src/new/new.service";

@Injectable()
export class TodoService{

    constructor(@InjectRepository(TodosEntity) private todosRepository:Repository<TodosEntity>,
                @InjectRepository(NewEntity) private newRepository:Repository<NewEntity>,
                private newService:NewService
    ){    }
async getTodos():Promise<TodosEntity[]> {
return await this.todosRepository.find();

}

async getOne(id:number):Promise<TodosEntity>{
    console.log(id) 
   
    return await this.todosRepository.findOne({ where: { id } })
}

async postValue(TodosEntity:TodosEntity){
    return await this.todosRepository.save(TodosEntity)
}

async remove(id: number): Promise<void> {
    await this.todosRepository.delete(id);
  }

async update(id:number ,entity:TodosEntity){
   const updateRow = await this.todosRepository.findOne({where:{id}})
   if(!updateRow){
    throw new NotFoundException(' value illa bro ')
   } 
   console.log(updateRow,"################");
   console.log(entity,"!!!!!!!!!!!!!!!!!!!");
   
   
   updateRow.title = entity.title;
   updateRow.description = entity.description
   await this.todosRepository.save(updateRow)
  
   return updateRow;
}


async updateAnother(id:number,newEntity:NewEntity){

    const getFromThis = await this.todosRepository.findOne({where:{id}})
    if(!getFromThis){
        throw new NotFoundException('idhula onnum illa bhaa aprm epdi')
    }
    newEntity.title = getFromThis.title
    newEntity.description = getFromThis.description
    await this.newRepository.save(getFromThis)
    await this.todosRepository.delete(id)
    return getFromThis;

}


async interchange(newEntity:NewEntity,todoEntity:TodosEntity){
    const todo = await this.todosRepository.find()
    console.log(todo,"11111111111");

    
    const newget = await this.newRepository.find()
    console.log(newget,"22222222222");
    
    
    if(!todo){
        throw new NotFoundException('no value in todo')
    }

    if(!newget){
        throw new NotFoundException('no values in new')
    }

    await this.newRepository.save(todo)
    await this.todosRepository.save(newget)

}


async getNew():Promise<NewEntity> {
    console.log(this.newService.getOne(4));
    
    return  await this.newService.getOne(1)
    
    }


async updateAllToAnother(newEntity:NewEntity){

    const getFromThis = await this.todosRepository.find()
    if(!getFromThis){
        throw new NotFoundException('idhula onnum illa bhaa aprm epdi')
    }
    console.log("else")
  
     
    for(const gets of getFromThis){
    newEntity.title = gets.title
    newEntity.description = gets.description
    console.log("[[[[[",gets,"hiiiii ]");
    
    await this.newRepository.save(gets)
    }
   
    return getFromThis; 

}





}



