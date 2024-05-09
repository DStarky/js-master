import { Button, TextArea, TextField } from '@radix-ui/themes';

const NewQuestionPage = () => {
  return (
    <div className="max-w-xl space-y-3">
      <TextField.Root placeholder="Title" />
      <TextArea placeholder="Description" />
      <Button>Submit New Question</Button>
    </div>
  );
};
export default NewQuestionPage;
