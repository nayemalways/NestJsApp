import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  private users: { name: string; email: string }[] = [];

  getUsers() {
    return this.users;
  }

  createUser(user: { name: string; email: string }) {
    this.users.push(user);
    return user;
  }
}
