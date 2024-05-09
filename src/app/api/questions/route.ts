import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

import prisma from '../../../../prisma/client';

const createQuestionSchema = z.object({
  title: z
    .string()
    .min(1, { message: 'Title is required' })
    .max(255, { message: 'Title is too long. Max 255' }),
  description: z.string().min(1, { message: 'Description is required' }),
});

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = createQuestionSchema.safeParse(body);
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
