import ReactMarkdown from "react-markdown";

type MarkdownProps = {
  children: string | null;
};

const Markdown = ({ children }: MarkdownProps) => (
  <ReactMarkdown
    components={{
      h1: ({ node, ...props }) =>
        <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance mb-10" {...props} />,
      h2: ({node, ...props}) =>
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 mb-8" {...props} />,
      h3: ({node, ...props}) =>
        <h3 className="scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight first:mt-0 mb-6" {...props} />,
      p: ({node, ...props}) =>
        <p className="leading-7 mb-6" {...props} />,
      ul: ({node, ...props}) =>
        <ul className="my-6 ml-6 list-disc [&>li]:mt-2" {...props} />,
      pre: ({node, ...props}) =>
        <pre className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] my-2.5 font-mono text-sm font-semibold overflow-x-auto" {...props} />,
      a: ({node, ...props}) =>
        <a className="text-primary font-medium underline underline-offset-4" {...props} />,
    }}
  >{children}</ReactMarkdown>
);

export default Markdown;
