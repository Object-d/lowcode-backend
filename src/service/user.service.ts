import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Repository } from 'typeorm';
import { IUserOptions } from '../interface';
import { UserModel } from '../model/user';

@Provide()
export class UserService {
  @InjectEntityModel(UserModel) userModel: Repository<UserModel>;

  async getUser(options: IUserOptions) {
    return {
      uid: options.uid,
      username: 'mockedName',
      phone: '12345678901',
      email: 'xxx.xxx@xxx.com',
    };
  }

  async addUser() {
    let record = new UserModel();

    record = this.userModel.merge(record, {
      userName: 'migor',
      age: 18,
      description: 'test',
    });

    try {
      const created = await this.userModel.save(record);

      return created;
    } catch (e) {
      console.log(e);
    }
  }
}
