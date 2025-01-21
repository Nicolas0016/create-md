// Heading.tsx
export const Heading = ({
  level,
  children,
}: {
  level: number;
  children: React.ReactNode;
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements; // Dynamically create heading tags (h1, h2, h3, etc.)
  return (
    <Tag
      className={`my-4 text-gray-900 dark:text-white ${
        level === 1
          ? "text-3xl font-bold"
          : level === 2
          ? "text-2xl font-semibold"
          : "text-xl font-medium"
      }`}
    >
      {children}
    </Tag>
  );
};

// List.tsx
export const UList = ({ children }: { children: React.ReactNode }) => {
  return <ul className="list-disc pl-5 mt-2">{children}</ul>;
};
export const OList = ({ children }: { children: React.ReactNode }) => {
  return <ol className="list-decimal pl-5 mt-2">{children}</ol>;
};
export const ListItem = ({ children }: { children: React.ReactNode }) => {
  return <li className="mb-2 text-gray-900 dark:text-white">{children}</li>;
};

// Table.tsx
export const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table className="min-w-full table-auto border-separate border-spacing-0 mt-4 mb-6">
      {children}
    </table>
  );
};

export const TableRow = ({ children }: { children: React.ReactNode }) => {
  return (
    <tr className="border-b border-gray-300 dark:border-gray-700">
      {children}
    </tr>
  );
};

export const TableCell = ({ children }: { children: React.ReactNode }) => {
  return (
    <td className="p-3 text-sm font-medium text-gray-900 dark:text-white align-top">
      {children}
    </td>
  );
};
// Quote.tsx
export const Quote = ({ children }: { children: React.ReactNode }) => {
  return (
    <blockquote className="border-l-4 border-gray-500 pl-4 italic text-gray-700 dark:text-gray-300 dark:border-gray-400">
      {children}
    </blockquote>
  );
};

// CodeBlock.tsx
export const CodeBlock = ({ children }: { children: React.ReactNode }) => {
  return (
    <pre className="dark:bg-gray-900 bg-black text-white p-4 rounded-lg mt-4 mb-6 overflow-x-auto">
      <code className="whitespace-pre-wrap">{children}</code>
    </pre>
  );
};
// Anchor.tsx
export const Anchor = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => {
  return (
    <a
      href={href}
      className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
      target={href.startsWith("http") ? "_blank" : "_self"} // Abrir enlaces externos en una nueva pestaña
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};
