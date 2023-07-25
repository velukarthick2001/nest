import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('summa')
export class TodosEntity{
   
   @PrimaryGeneratedColumn()
    id:number;
    @Column()
    title:string
    @Column() 
    description:string


}