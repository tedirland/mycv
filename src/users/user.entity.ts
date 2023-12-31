import { AfterInsert, AfterRemove, AfterUpdate,Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;
    
    @Column()
    // This decorator tells nest to not include this in json response
    password: string;

    @AfterInsert()
    logInsert(){
        console.log('Inserted User with id', this.id)
    }

    @AfterUpdate()
    logUpdate(){
        console.log('Updated User with id', this.id)
    }
    @AfterRemove()
    logRemove(){
        console.log('Removed User with id', this.id)
    }
}