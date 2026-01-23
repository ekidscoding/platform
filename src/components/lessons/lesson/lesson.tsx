import { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useParams } from 'react-router';

import Editor from '@/components/editor';
import { ROUTES } from '@/routes/constants';

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
      <ReactMarkdown
        components={{
          h1: ({ node, ...props }) => <h1
            className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance" {...props} />,
        }}
      >{markdownContent}</ReactMarkdown>
      <Editor />
    </>
  );
};

export default Lesson;
