import axios from 'axios';

import { QuestionData } from '@/app/questions/_components/QuestionForm';

export async function createNewQuestion(data: QuestionData) {
  await axios.post('/api/questions', data);
}

export async function updateQuestion(id: number, data: QuestionData) {
  await axios.patch(`/api/questions/${id}`, data);
}

export async function deleteQuestion(id: number) {
  await axios.delete(`/api/questions/${id}`);
}