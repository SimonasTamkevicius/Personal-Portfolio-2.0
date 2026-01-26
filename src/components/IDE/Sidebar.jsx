import React from 'react';
import { VscFiles, VscChevronRight, VscChevronDown, VscClose } from "react-icons/vsc";
import { FaReact, FaJs, FaHtml5, FaCss3 } from "react-icons/fa";

const getFileIcon = (fileName) => {
    if (fileName.endsWith('.jsx') || fileName.endsWith('.tsx')) return <FaReact className="text-blue-400" />;
    if (fileName.endsWith('.js')) return <FaJs className="text-yellow-400" />;
    if (fileName.endsWith('.html')) return <FaHtml5 className="text-orange-500" />;
    if (fileName.endsWith('.css')) return <FaCss3 className="text-blue-500" />;
    return <VscFiles className="text-gray-400" />;
};

const Sidebar = ({ files, activeFile, onFileSelect, onClose }) => {
  return (
    <div className="w-64 bg-[#252526] text-white flex flex-col border-r border-[#1e1e1e] h-full shadow-xl md:shadow-none">
      <div className="p-3 text-xs font-bold tracking-widest text-gray-400 flex justify-between items-center">
          <span>PROJECT EXPLORER</span>
          <button onClick={onClose} className="md:hidden text-lg p-1 hover:bg-gray-700 rounded">
            <VscClose />
          </button>
      </div>
      
      <div className="flex-1 overflow-y-auto">
        {/* Simplified "Folder" structure */}
        <div className="flex items-center px-2 py-1 text-sm font-bold text-gray-300 cursor-pointer hover:bg-[#37373d]">
            <VscChevronDown className="mr-1" />
            <span>MY PROJECTS</span>
        </div>
        
        <div className="pl-4">
            {files.map((file, index) => (
                <div 
                    key={index}
                    onClick={() => onFileSelect(file)}
                    className={`flex items-center px-4 py-1.5 text-sm cursor-pointer hover:bg-[#2a2d2e] ${activeFile?.fileName === file.fileName ? 'bg-[#37373d] text-white' : 'text-gray-400'}`}
                >
                    <span className="mr-2 text-lg">
                        {getFileIcon(file.fileName)}
                    </span>
                    <span>{file.fileName}</span>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
