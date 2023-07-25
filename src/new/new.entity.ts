import{ Column, Entity, PrimaryGeneratedColumn} from"typeorm"


@Entity()
export class NewEntity{
    @PrimaryGeneratedColumn()
    id:number;
    title:string
    @Column()
    description:string
}