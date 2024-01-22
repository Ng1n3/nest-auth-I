import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  name: string;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users: User[] = [
    {
      id: 1, 
      name: 'Emmanuel',
      username: '34z1',
      password: 'emma1234'
    },
    {
      id: 2, 
      name: 'Thompson',
      username: 'Tom124',
      password: 'tom1234'
    }
  ]

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find(user => user.username === username)
  }
}
