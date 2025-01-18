import { useState } from "react";

export const useExpandedSections = () => {
  const [expandedSections, setExpandedSections] = useState<
    Record<string, boolean>
  >({});

  const handleToggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  return {
    expandedSections,
    handleToggleSection,
  };
};
