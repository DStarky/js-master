import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';

import { questionSchema } from '@/lib/validation/questionSchema';
import authOptions from '@/auth/authOptions';
import { getServerSession } from 'next-auth';

export async function POST(request: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

  const body = await request.json();
  const validation = questionSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const newQuestion = await prisma.question.create({
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(newQuestion, { status: 201 });
}
