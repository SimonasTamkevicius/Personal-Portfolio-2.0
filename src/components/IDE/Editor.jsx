import React from 'react';
import { VscClose, VscPreview, VscMenu } from "react-icons/vsc";
import { LuExternalLink } from "react-icons/lu";

const Editor = ({ activeFile, closeFile, toggleSidebar }) => {
  if (!activeFile) {
    return (
      <div className="flex-1 bg-[#1e1e1e] flex justify-center items-center text-gray-500">
        <div className="text-center">
            <VscPreview className="text-6xl mx-auto mb-4 opacity-50" />
            <p>Select a file to view detailed project info.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-[#1e1e1e] h-full overflow-hidden">
      {/* Tab Header */}
      <div className="flex bg-[#252526] overflow-x-auto items-center">
        <button className="md:hidden p-2 text-white hover:bg-gray-700" onClick={toggleSidebar}>
            <VscMenu />
        </button>
        <div className="flex items-center px-3 py-2 bg-[#1e1e1e] border-t border-t-blue-500 text-white text-sm min-w-[120px] justify-between cursor-pointer border-r border-[#252526]">
            <span>{activeFile.fileName}</span>
            <VscClose className="ml-2 rounded-md hover:bg-gray-700 p-0.5 text-lg" onClick={closeFile} />
        </div>
      </div>

      {/* Editor Content Area */}
      <div className="flex-1 p-0 overflow-hidden relative bg-white">
        {/* Breadcrumbs / Toolbar */}
        <div className="flex items-center px-4 py-2 text-sm text-gray-400 border-b border-[#252526] bg-[#1e1e1e]">
            <span>src</span>
            <span className="mx-1">&gt;</span>
            <span>components</span>
            <span className="mx-1">&gt;</span>
            <span className="text-white">{activeFile.title}</span>
        </div>

        {/* Browser Preview */}
        <div className="h-full flex flex-col">
            {/* Browser Toolbar */}
            <div className="bg-gray-100 border-b p-2 flex items-center gap-2">
                <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-center text-gray-500 mx-4 truncate shadow-sm flex justify-between items-center group">
                    <span className="mx-auto">{activeFile.link.startsWith('http') ? activeFile.link : window.location.origin + activeFile.link}</span>
                    <a 
                        href={activeFile.link} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="text-gray-400 hover:text-blue-500 transition-colors"
                        title="Open in new tab"
                    >
                        <LuExternalLink />
                    </a>
                </div>
            </div>

            {/* Iframe Container */}
            <div className="flex-1 relative bg-gray-50 overflow-hidden">
                <iframe 
                    src={activeFile.link}
                    className="w-full h-full border-0"
                    title={`${activeFile.title} preview`}
                    sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
                />
            </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
