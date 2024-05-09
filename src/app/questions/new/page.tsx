'use client';

import { Button, TextField } from '@radix-ui/themes';
import 'easymde/dist/easymde.min.css';
import SimpleMDE from 'react-simplemde-editor';

const NewQuestionPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" />
      <SimpleMDE placeholder="Description" />;
      <Button>Submit New Question</Button>
    </div>
  );
};
export default NewQuestionPage;
