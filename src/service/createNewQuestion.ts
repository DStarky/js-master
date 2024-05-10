import axios from 'axios';

import { NewQuestionForm } from '@/app/questions/new/page';

export async function createNewQuestion(data: NewQuestionForm) {
  await axios.post('/api/questions', data);
}
