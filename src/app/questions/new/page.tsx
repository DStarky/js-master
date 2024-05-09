'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Button, Callout, Text, TextField } from '@radix-ui/themes';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';
import { z } from 'zod';

import { createQuestionSchema } from '@/lib/validation/createQuestionSchema';

type NewQuestionForm = z.infer<typeof createQuestionSchema>;

const NewQuestionPage = () => {
  const router = useRouter();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<NewQuestionForm>({
    resolver: zodResolver(createQuestionSchema),
  });
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: NewQuestionForm) => {
    try {
      await axios.post('/api/questions', data);
      router.push('/questions');
    } catch (error) {
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
          placeholder="Title"
          {...register('title')}
        />
        {errors.title && (
          <Text
            color="red"
            as="p"
          >
            {errors.title.message}
          </Text>
        )}
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <SimpleMDE
              {...field}
              options={autofocusNoSpellcheckerOptions}
            />
          )}
        />
        {errors.description && (
          <Text
            color="red"
            as="p"
          >
            {errors.description.message}
          </Text>
        )}
        <Button>Submit New Question</Button>
      </form>
    </div>
  );
};
export default NewQuestionPage;
