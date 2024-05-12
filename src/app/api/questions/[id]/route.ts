import delay from 'delay';
import { getServerSession } from 'next-auth';
import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../../prisma/client';

import authOptions from '@/auth/authOptions';
import { questionSchema } from '@/lib/validation/questionSchema';

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const validation = questionSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const question = await prisma.question.findUnique({
    where: { id: Number(params.id) },
  });

  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  const updatedQuestion = await prisma.question.update({
    where: { id: question.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedQuestion);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const session = await getServerSession(authOptions);
  if (!session)
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  
  const question = await prisma.question.findUnique({
    where: { id: Number(params.id) },
  });

  if (!question) {
    return NextResponse.json({ error: 'Question not found' }, { status: 404 });
  }

  const deletedQuestion = await prisma.question.delete({
    where: { id: question.id },
  });

  return NextResponse.json(deletedQuestion);
}
