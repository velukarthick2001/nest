import { Injectable, NotFoundException } from '@nestjs/common';
import { UsersEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UsersService {

  constructor(@InjectRepository(UsersEntity) private userRepository:Repository<UsersEntity>){

  }

  async create(userEntity: UsersEntity) {
    return await this.userRepository.save(userEntity); 
  }

  async findAll() {
    return await this.userRepository.find();
  }

  async findOne(id: number) {
    return await this.userRepository.findOne({where :{id}});
  }

  async update(id: number, userEntity: UsersEntity) {
    const upRow = await this.userRepository.findOne({where:{id}})
    if(!upRow){
      throw new NotFoundException('value nahi hey')
    }
    userEntity.name = upRow.name

    return upRow;
  }

 async remove(id: number) {
   return await this.userRepository.delete(id);
  }
}
