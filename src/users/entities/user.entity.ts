import { IsNumber, IsString, MinLength } from "class-validator"
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

enum Usergender{
    Male,
    Female,
    Others,
    NotSpecify
}


@Entity()
export class UsersEntity{

    @PrimaryGeneratedColumn()
    id:number

    @Column()
    @IsString() 
    name:string

    @Column({
        type:'enum',
        enum:Usergender,
        default:Usergender.NotSpecify
    })
    gender:Usergender

    @Column({nullable: true})
    @IsString()
    @MinLength(5)
    adderess:string


    @Column({
        type:'timestamp',
        default: () =>null

    })
    @IsString()
    DOB:Date

    @Column({
        type:'int',
        default: () => 0,
        nullable: true
    })
    @IsNumber()
    age:number


    @Column({type:'bigint'})
    mobileno:number

    @Column({
        type:'timestamp',
        default:() => 'CURRENT_TIMESTAMP',
        onUpdate:'CURRENT_TIMESTAMP'
        
    })
    created_at:Date

}