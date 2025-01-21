import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import remarkGfm from "remark-gfm"; // GitHub Flavored Markdown (GFM)
import {
  Anchor,
  CodeBlock,
  Heading,
  ListItem,
  OList,
  Quote,
  Table,
  TableCell,
  TableRow,
  UList,
} from "./ComponentsPreview"; // Ajusta la ruta según corresponda

// Componente de Vista Previa para el Markdown
interface Props {
  markdown: string;
}

const Preview = ({ markdown }: Props) => {
  return (
    <div className="w-1/3 p-4 border-l border-gray-300 dark:border-gray-700 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Vista Previa
        </h2>
      </div>
      <div className="prose max-w-none h-full bg-white p-4 border border-gray-300 rounded-lg overflow-y-auto dark:bg-gray-800 dark:border-gray-600 dark:text-white">
        <ReactMarkdown
          children={markdown}
          remarkPlugins={[remarkGfm]} // Usar GitHub Flavored Markdown (GFM)
          rehypePlugins={[rehypeHighlight]} // Resaltado de sintaxis
          components={{
            h1: (props) => {
              // @ts-ignore
              return <Heading level={1} {...props} />;
            },
            h2: (props) => {
              // @ts-ignore
              return <Heading level={2} {...props} />;
            },
            h3: (props) => {
              // @ts-ignore
              return <Heading level={3} {...props} />;
            },
            h4: (props) => {
              // @ts-ignore
              return <Heading level={4} {...props} />;
            },
            h5: (props) => {
              // @ts-ignore
              return <Heading level={5} {...props} />;
            },
            h6: (props) => {
              // @ts-ignore
              return <Heading level={6} {...props} />;
            },
            ul: (props) => {
              // @ts-ignore
              return <UList {...props} />;
            },
            ol: (props) => {
              // @ts-ignore
              return <OList {...props} />;
            },
            li: (props) => {
              // @ts-ignore
              return <ListItem {...props} />;
            },
            table: (props) => {
              // @ts-ignore
              return <Table {...props} />;
            },
            tr: (props) => {
              // @ts-ignore
              return <TableRow {...props} />;
            },
            td: (props) => {
              // @ts-ignore
              return <TableCell {...props} />;
            },
            pre: (props) => {
              // @ts-ignore
              return <CodeBlock {...props} />;
            },
            code: (props) => {
              // @ts-ignore
              return <code>{props.children}</code>;
            },
            a: (props) => {
              // @ts-ignore
              return <Anchor {...props} />;
            },
            blockquote: (props) => {
              // @ts-ignore
              return <Quote {...props} />;
            },
          }}
        />
      </div>
    </div>
  );
};

export default Preview;
