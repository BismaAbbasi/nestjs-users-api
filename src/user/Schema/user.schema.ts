import { Schema,SchemaFactory,Prop } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class user extends Document{
    @Prop({required:true})
    name!:string

    @Prop({required:true})
    email!:string

    @Prop({required:true})
    password!:string

    @Prop({default:'user'})
    role!:string
}
export const UserSchema= SchemaFactory.createForClass(user);