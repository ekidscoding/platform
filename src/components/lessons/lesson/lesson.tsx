import { useParams } from 'react-router';

import Editor from '@/components/editor';
import Markdown from '@/components/markdown';
import useFetchLesson from '@/hooks/api/use-fetch-lesson';
import { Spinner } from '@/components/ui/spinner';
import { Sidebar, SidebarProvider } from "@/components/ui/sidebar";

import SidebarTrigger from "./sidebar-trigger";

const Lesson = () => {
  const { id } = useParams();
  const { data, error, isFetching, isLoading } = useFetchLesson(id);
  const isLoadingState = isLoading || isFetching;

  const LessonTemplate = () => (
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
      </>
  );

  return (
      <SidebarProvider className="block md:flex">
          <div className="md:hidden w-full">
              <LessonTemplate />
          </div>
          <div className="hidden md:block">
              <Sidebar>
                  <div className="h-full overflow-y-auto py-[84px] px-[15px]">
                      <LessonTemplate />
                  </div>
                  <SidebarTrigger className="absolute right-[-52px] top-[63px]" />
              </Sidebar>
          </div>
          <Editor />
      </SidebarProvider>
  );
};

export default Lesson;
