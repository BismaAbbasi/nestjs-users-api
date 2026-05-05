import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Roles } from '../auth/roles.decorator';
import { RolesGuard } from '../auth/roles.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';


@ApiTags('Users')
@Controller('user')
export class UserController {
    constructor(private readonly userservice:UserService){}
  
@Post()
create(@Body()body:CreateUserDto){
    return this.userservice.createdata(body);
}
@Get()
@ApiBearerAuth()
@UseGuards(AuthGuard('jwt'),RolesGuard) 
@Roles('admin') 
findAll() {
  return this.userservice.getAllData();
}
// @Get()
// getData(){
//     return this.userservice.getAllData();
// }
@Get(':id')
getonedata(@Param('id')id:string){
    return this.userservice.getOne(id);
}
@Delete(':id')
deleteone(@Param('id')id:string){
    return this.userservice.deleteid(id);
}
@Put(':id')
updatedata(@Param('id')id:string,@Body()body:UpdateUserDto){
    return this.userservice.updatedata(id,body);
}




}
