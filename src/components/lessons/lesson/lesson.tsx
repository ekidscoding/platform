import { useEffect, useState } from 'react';
import ReactMarkdown from "react-markdown";
import { useParams } from 'react-router';

const Lesson = () => {
  const [markdownContent, setMarkdownContent] = useState<string | null>(null);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${window.location.origin}/lessons/${id}.md`)
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text ?? ''));
  }, []);

  return (
    <ReactMarkdown
      components={{
        h1: ({ node, ...props }) => <h1
          className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl" {...props} />,
      }}
    >{markdownContent}</ReactMarkdown>
  );
};

export default Lesson;
