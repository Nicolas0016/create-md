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
} from "./ComponentsPreview";

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
            h1: (props) => <Heading level={1} {...props} />,
            h2: (props) => <Heading level={2} {...props} />,
            h3: (props) => <Heading level={3} {...props} />,
            h4: (props) => <Heading level={4} {...props} />,
            h5: (props) => <Heading level={5} {...props} />,
            h6: (props) => <Heading level={6} {...props} />,
            ul: (props) => <UList {...props} />,
            ol: (props) => <OList {...props} />,
            li: (props) => <ListItem {...props} />,
            table: (props) => <Table {...props} />,
            tr: (props) => <TableRow {...props} />,
            td: (props) => <TableCell {...props} />,
            pre: (props) => <CodeBlock {...props} />,
            code: (props) => <code>{props.children}</code>,
            a: (props) => <Anchor {...props} />,
            blockquote: (props) => <Quote {...props} />,
          }}
        />
      </div>
    </div>
  );
};

export default Preview;
