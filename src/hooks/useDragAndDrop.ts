export const useDragAndDrop = (updateMarkdown: (text: string) => void) => {
  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    code: string
  ) => {
    e.dataTransfer.setData("text/plain", code);
  };

  const handleDrop = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
    const code = e.dataTransfer.getData("text/plain");
    const { selectionStart, value } = e.currentTarget;
    const before = value.slice(0, selectionStart);
    const after = value.slice(selectionStart);
    const newMarkdown = before + code + after;
    updateMarkdown(newMarkdown);
  };

  const handleDragOver = (e: React.DragEvent<HTMLTextAreaElement>) => {
    e.preventDefault();
  };

  return {
    handleDragStart,
    handleDrop,
    handleDragOver,
  };
};
