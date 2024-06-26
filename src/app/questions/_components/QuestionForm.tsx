'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Question } from '@prisma/client';
import { Button, Callout, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';

import { ErrorMessage, Spinner } from '@/components';
import { patchQuestionSchema, questionSchema } from '@/lib/validation/questionSchema';
import { createNewQuestion, updateQuestion } from '@/service/questionService';

export type QuestionData = z.infer<typeof questionSchema>;
export type PatchQuestionData = z.infer<typeof patchQuestionSchema>;

interface QuestionFormProps {
  question?: Question;
}

const QuestionForm = ({ question }: QuestionFormProps) => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<QuestionData>({
    resolver: zodResolver(questionSchema),
  });
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data: QuestionData) => {
    try {
      setIsSubmitting(true);
      if (question) {
        await updateQuestion(question.id, data);
      } else {
        await createNewQuestion(data);
      }
      router.push('/questions/list');
      router.refresh();
    } catch (error) {
      setIsSubmitting(false);
      setError('Something went wrong');
    }
  };

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  return (
    <div className="max-w-xl">
      {error && (
        <Callout.Root className="mb-3">
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3"
        onSubmit={handleSubmit(onSubmit)}
      >
        <TextField.Root
          defaultValue={question?.title}
          placeholder="Title"
          {...register('title')}
        />
        <ErrorMessage>{errors?.title?.message}</ErrorMessage>
        <Controller
          name="description"
          control={control}
          defaultValue={question?.description}
          render={({ field }) => (
            <SimpleMDE
              {...field}
              options={autofocusNoSpellcheckerOptions}
            />
          )}
        />
        <ErrorMessage>{errors?.description?.message}</ErrorMessage>
        <Button disabled={isSubmitting}>
          {question ? 'Update Question' : 'Create Question'}
          {isSubmitting && <Spinner />}
        </Button>
      </form>
    </div>
  );
};
export default QuestionForm;
