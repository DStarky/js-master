import { User } from '@prisma/client';
import axios from 'axios';

export async function getUsers() {
  const users = axios.get<User[]>('/api/users');

  return users;
}
