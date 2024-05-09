'use client';

import { Button, Callout, TextField } from '@radix-ui/themes';
import axios from 'axios';
import 'easymde/dist/easymde.min.css';
import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import SimpleMDE from 'react-simplemde-editor';

interface NewQuestionForm {
  title: string;
  description: string;
}

const NewQuestionPage = () => {
  const router = useRouter();
  const { register, control, handleSubmit } = useForm<NewQuestionForm>();
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
    <div className='max-w-xl'>
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
    </div>
  );
};
export default NewQuestionPage;
