import { NextRequest, NextResponse } from 'next/server';

import prisma from '../../../../prisma/client';

import { questionSchema } from '@/lib/validation/questionSchema';

export async function POST(request: NextRequest) {
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
