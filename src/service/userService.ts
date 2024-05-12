import { User } from '@prisma/client';
import axios from 'axios';

export async function getUsers() {
  const users = await axios.get<User[]>('/api/users');
  if (!users) return;

  return users.data;
}
