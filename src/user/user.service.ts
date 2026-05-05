import { ConflictException, Injectable, NotFoundException,BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId } from 'mongoose';
import { Model } from 'mongoose';
import { user } from './Schema/user.schema';
import { CreateUserDto } from './dto/create-user.dto';


@Injectable()
export class UserService {
    constructor(@InjectModel('user')private usermodel:Model<user>){}

   async createdata(data:CreateUserDto){
    const existinguser=await this.usermodel.findOne({email:data.email});
    if(existinguser){
        throw new ConflictException('user already exists');
    }
return this.usermodel.create(data)
   }
   async  getAllData(){
    return this.usermodel.find();
   }
async getOne(id:string){
     if (!isValidObjectId(id)) {
    throw new BadRequestException(`${id} is not a valid id`);
  }
    const user=
    await  this.usermodel.findById(id);
    if(!user){
        throw new NotFoundException(`user with ${id} not found`)
    }
    return user;
}
async deleteid(id:string){
     if (!isValidObjectId(id)) {
    throw new BadRequestException(`${id} is not a valid id`);
  }
    const user=await this.usermodel.findByIdAndDelete(id);
    if(!user){
        throw new NotFoundException(`user not found ${id}`)
    }
    return user;
}
async updatedata(id:string,data:any){
     if (!isValidObjectId(id)) {
    throw new BadRequestException(`${id} is not a valid id`);
  }
    const user=await this.usermodel.findByIdAndUpdate(id,data,{new:true})
    if(!user){
        throw new NotFoundException(`user not found ${id}`)
    }
    return user;
}

}
