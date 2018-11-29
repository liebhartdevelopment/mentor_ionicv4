import { User } from '../../models/user/user.interface';

const userList: User[] = [
  { firstName: 'John', lastName: 'Doe', email: 'john@doe.com', avatar: 'assets/img/avatar.png' },
  { firstName: 'Tom', lastName: 'Smith', email: 'tom@smith.com', avatar: 'assets/img/avatar.png' },
  { firstName: 'Jane', lastName: 'Doe', email: 'jane@doe.com', avatar: 'assets/img/avatar.png' },
  { firstName: 'Paul', lastName: 'Johnson', email: 'paul@johnson.com', avatar: 'assets/img/avatar.png' }
]

export const USER_LIST = userList;