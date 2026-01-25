import { useParams } from 'react-router';

import Editor from '@/components/editor';
import Markdown from '@/components/markdown';
import useFetchLesson from '@/hooks/api/use-fetch-lesson';
import { Spinner } from '@/components/ui/spinner';

const Lesson = () => {
  const { id } = useParams();
  const { data, error, isFetching, isLoading } = useFetchLesson(id);
  const isLoadingState = isLoading || isFetching;

  return (
    <>
      {isLoadingState ? (
        <>
          <Spinner /> Loading...
        </>
      ) : error ? (
        <div className='text-destructive'>Error: {error.message}</div>
      ) : (
        <Markdown>{data?.data ?? ''}</Markdown>
      )}
      <Editor />
    </>
  );
};

export default Lesson;
