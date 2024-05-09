import { Button, Table } from '@radix-ui/themes';
import Link from 'next/link';

import QuestionComplexityBadge from '@/components/ui/QuestionComplexityBadge';
import QuestionStatusBadge from '@/components/ui/QuestionStatusBadge';

import prisma from '../../../prisma/client';

const QuestionPage = async () => {
  const questions = await prisma.question.findMany();

  return (
    <div>
      <div className="mb-5">
        <Link href="/questions/new">
          <Button>New Question</Button>
        </Link>
      </div>
      <Table.Root variant="surface">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Title</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Description</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Status
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Complexity
            </Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell className="hidden md:table-cell">
              Created
            </Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {questions.map(question => (
            <Table.Row key={question.id}>
              <Table.Cell>
                {question.title}
                <div className="mt-2 block md:hidden">
                  <QuestionStatusBadge status={question.status} />
                </div>
              </Table.Cell>
              <Table.Cell>
                {question.description}
                <div className="mt-2 block md:hidden">
                  <QuestionComplexityBadge complexity={question.complexity} />
                </div>
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <QuestionStatusBadge status={question.status} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                <QuestionComplexityBadge complexity={question.complexity} />
              </Table.Cell>
              <Table.Cell className="hidden md:table-cell">
                {question.createdAt.toLocaleDateString('ru-RU')}
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table.Root>
    </div>
  );
};
export default QuestionPage;
