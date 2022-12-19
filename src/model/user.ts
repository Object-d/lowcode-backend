// user.ts

import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';

// 映射user table
@EntityModel({ name: 'user' })
export class UserModel {
  // 声明主键
  @PrimaryGeneratedColumn('increment') id: number;

  // 映射userName和user表中的user_name对应
  @Column({ name: 'user_name' }) userName: string;

  @Column({ name: 'age' }) age: number;

  @Column({ name: 'description' }) description: string;
}
