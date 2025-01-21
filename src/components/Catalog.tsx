import React from "react";

interface Component {
  name: string;
  code: string;
}

interface CatalogProps {
  componentsCatalog: { [key: string]: Component[] };
  expandedSections: Record<string, boolean>;
  handleToggleSection: (section: string) => void;
  handleComponentClick: (code: string) => void;
  handleDragStart: (e: React.DragEvent<HTMLDivElement>, code: string) => void;
}

const Catalog: React.FC<CatalogProps> = ({
  componentsCatalog,
  expandedSections,
  handleToggleSection,
  handleComponentClick,
  handleDragStart,
}) => {
  return (
    <div className="w-1/3 p-4 relative border-r border-gray-300 dark:border-gray-700 overflow-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-900 top-0 dark:text-white  ">
        Catálogo de Componentes
      </h2>

      {Object.keys(componentsCatalog).map((section) => (
        <div key={section} className="mb-4">
          <button
            className="w-full text-left px-4 py-2 bg-gray-300 hover:bg-gray-400 rounded-lg font-semibold dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => handleToggleSection(section)}
            aria-controls={`section-${section}`} // Relaciona el botón con el contenido controlado
          >
            {section}
          </button>
          <div
            className={`transition-all duration-300 overflow-hidden ${
              expandedSections[section]
                ? "max-h-screen opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <ul className="mt-2 space-y-2">
              {componentsCatalog[section].map((component, index) => (
                <li key={index}>
                  <div
                    className="flex items-center justify-between w-full h-12 px-4 py-2 bg-gray-200 hover:bg-gray-700 rounded-lg cursor-pointer dark:bg-gray-600 dark:hover:bg-gray-600 dark:text-white"
                    onClick={() => handleComponentClick(component.code)}
                    draggable
                    onDragStart={(e) => handleDragStart(e, component.code)}
                  >
                    {component.name}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Catalog;
