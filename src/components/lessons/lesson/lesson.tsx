import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

import Editor from '@/components/editor';
import { ROUTES } from '@/routes/constants';
import Markdown from '@/components/markdown';

const Lesson = () => {
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${ROUTES.BASE_URL}/lessons/${id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text ?? ''));
  }, [setMarkdownContent]);

  return (
    <>
      <Markdown>{markdownContent}</Markdown>
      <Editor />
    </>
  );
};

export default Lesson;
