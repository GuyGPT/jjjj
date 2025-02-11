import React, { useState } from 'react';
import { X, Github, Globe, Code, File, Folder } from 'lucide-react';

interface PreviewProps {
  isOpen: boolean;
  onClose: () => void;
}

const Preview: React.FC<PreviewProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState('files');

  const repoStructure = [
    {
      name: 'src',
      type: 'folder',
      children: [
        {
          name: 'components',
          type: 'folder',
          children: [
            { name: 'Navbar.tsx', type: 'file' },
            { name: 'Hero.tsx', type: 'file' },
            { name: 'Services.tsx', type: 'file' },
            { name: 'FAQ.tsx', type: 'file' },
          ]
        },
        { name: 'App.tsx', type: 'file' },
        { name: 'main.tsx', type: 'file' },
      ]
    },
    { name: 'package.json', type: 'file' },
    { name: 'index.html', type: 'file' },
    { name: 'README.md', type: 'file' },
  ];

  const renderFileTree = (items: any[], level = 0) => {
    return items.map((item, index) => (
      <div key={index} style={{ paddingLeft: `${level * 20}px` }} className="py-1">
        <div className="flex items-center text-gray-200 hover:text-[#F8E061] cursor-pointer">
          {item.type === 'folder' ? (
            <>
              <Folder size={16} className="mr-2" />
              <span>{item.name}</span>
            </>
          ) : (
            <>
              <File size={16} className="mr-2" />
              <span>{item.name}</span>
            </>
          )}
        </div>
        {item.children && renderFileTree(item.children, level + 1)}
      </div>
    ));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
      <div className="bg-[#040504] rounded-lg w-full max-w-3xl h-[80vh] flex flex-col">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <div className="flex items-center space-x-4">
            <Github className="text-[#F8E061]" size={24} />
            <h2 className="text-[#F8E061] text-lg font-semibold">Repository Preview</h2>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-[#F8E061] transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex border-b border-gray-700">
          <button
            className={`px-4 py-2 ${
              activeTab === 'files'
                ? 'text-[#F8E061] border-b-2 border-[#F8E061]'
                : 'text-gray-400 hover:text-[#F8E061]'
            }`}
            onClick={() => setActiveTab('files')}
          >
            <div className="flex items-center space-x-2">
              <Code size={16} />
              <span>Files</span>
            </div>
          </button>
          <button
            className={`px-4 py-2 ${
              activeTab === 'preview'
                ? 'text-[#F8E061] border-b-2 border-[#F8E061]'
                : 'text-gray-400 hover:text-[#F8E061]'
            }`}
            onClick={() => setActiveTab('preview')}
          >
            <div className="flex items-center space-x-2">
              <Globe size={16} />
              <span>Preview</span>
            </div>
          </button>
        </div>

        <div className="flex-1 overflow-auto p-4">
          {activeTab === 'files' ? (
            <div className="text-sm">{renderFileTree(repoStructure)}</div>
          ) : (
            <div className="h-full flex items-center justify-center text-gray-400">
              Site preview coming soon...
            </div>
          )}
        </div>

        <div className="p-4 border-t border-gray-700 flex justify-between items-center">
          <div className="text-gray-400 text-sm">
            Branch: <span className="text-[#F8E061]">main</span>
          </div>
          <button className="px-4 py-2 bg-[#F8E061] text-black rounded hover:bg-[#E6D057] transition-colors">
            Open in GitHub
          </button>
        </div>
      </div>
    </div>
  );
};

export default Preview;