import { Inject, Controller, Get, Query, Post } from '@midwayjs/decorator';
import { Context } from '@midwayjs/koa';
import { UserService } from '../service/user.service';

@Controller('/')
export class APIController {
  @Inject()
  ctx: Context;

  @Inject()
  userService: UserService;

  @Get('/users')
  async getUsers() {
    const users = await this.userService.getUsers();
    return { success: true, message: 'OK', data: users };
  }

  @Get('/user')
  async getUser(@Query('uid') uid) {
    const user = await this.userService.getUser({ uid });
    return { success: true, message: 'OK', data: user };
  }

  @Post('/user')
  async addUser() {
    const user = await this.userService.addUser();
    return { success: true, message: 'OK', data: user };
  }
}
