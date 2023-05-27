import { useState } from "react";
import { BsHash } from "react-icons/bs";
import { FaChevronDown, FaChevronRight, FaPlus } from "react-icons/fa";

const topics = ['tailwind-css', 'react'];
const questions = ['jit-compilation', 'purge-files', 'dark-mode'];
const random = ['variants', 'plugins'];

export default function ChannelBar() {
  return (
    <div className="channel-bar shadow-lg">
      <ChannelBlock />
      <div className="channel-container">
        <Dropdown header='Topics' selections={topics} />
        <Dropdown header='Questions' selections={questions} />
        <Dropdown header='Random' selections={random} />
      </div>
    </div>
  )
}

function Dropdown({ header, selections }) {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="dropdown">
      <div onClick={() => setExpanded(!expanded)} className="dropdown-header">
        <ChevronIcon expanded={expanded} />
        <h5 className={expanded ? 'dropdown-header-text-selection' : 'dropdown-header-text'}>
          {header}
        </h5>
        <FaPlus size={12} className="text-accent text-opacity-80 my-auto ml-auto" />
      </div>
      {expanded &&
        selections &&
          selections.map(selection => <TopicSelection selection={selection} />)}
    </div>
  )
}

function ChannelBlock() {
  return (
    <div className="channel-block">
      <h5 className="channel-block-text">Channels</h5>
    </div>
  )
}

function ChevronIcon({ expanded }) {
  const chevClass = 'text-accent text-opacity-80 my-auto mr-1';
  return expanded
    ? <FaChevronDown size={14} className={chevClass} />
    : <FaChevronRight size={14} className={chevClass} />
}

function TopicSelection({ selection }) {
  return (
    <div className="dropdown-selection">
      <BsHash size={24} className="text-gray-400" />
      <h5 className="dropdown-selection-text">{selection}</h5>
    </div>
  )
}


