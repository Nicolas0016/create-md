import { marked } from "marked";
import { useEffect, useState } from "react";

interface Props {
  markdown: string;
}

const Preview = ({ markdown }: Props) => {
  const [htmlContent, setHtmlContent] = useState("");

  useEffect(() => {
    const generateHtml = async () => {
      const result = await marked(markdown); // Asegúrate de que sea una cadena
      setHtmlContent(result);
    };

    generateHtml();
  }, [markdown]);
  return (
    <div className="w-1/3 p-4 border-l border-gray-300 dark:border-gray-700 flex flex-col">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Vista Previa
        </h2>
      </div>
      <div
        className="prose max-w-none h-full bg-white p-4 border border-gray-300 rounded-lg overflow-y-auto dark:bg-gray-800 dark:border-gray-600 dark:text-white"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
    </div>
  );
};

export default Preview;
