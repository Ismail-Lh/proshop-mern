import bcrypt from 'bcryptjs';

interface UserData {
  name: string;
  email: string;
  password: string;
  isAdmin?: boolean;
}

const users: UserData[] = [
  {
    name: 'Admin User',
    email: 'admin@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'John Doe',
    email: 'john@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@exmaple.com',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
