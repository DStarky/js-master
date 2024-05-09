'use client';

import { Button, TextField } from '@radix-ui/themes';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';

interface NewQuestionForm {
  title: string;
  description: string;
}

const NewQuestionPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<NewQuestionForm>();

  const onSubmit = async (data: NewQuestionForm) => {
    await axios.post('/api/questions', data);
    router.push('/questions');
  }

  const autofocusNoSpellcheckerOptions = useMemo(() => {
    return {
      autofocus: true,
      spellChecker: false,
    };
  }, []);

  return (
    <form
      className="max-w-xl space-y-3"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField.Root
        placeholder="Title"
        {...register('title')}
      />
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
      <Button>Submit New Question</Button>
    </form>
  );
};
export default NewQuestionPage;
