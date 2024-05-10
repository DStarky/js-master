import { Table } from '@radix-ui/themes';

import Link from '@/components/ui/Link';

import prisma from '../../../prisma/client';

import QuestionActions from './QuestionActions';
import { QuestionComplexityBadge, QuestionStatusBadge } from '@/components';

const QuestionPage = async () => {
  const questions = await prisma.question.findMany();

  return (
    <div>
      <QuestionActions />
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
                <Link href={`/questions/${question.id}`}>{question.title}</Link>
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
