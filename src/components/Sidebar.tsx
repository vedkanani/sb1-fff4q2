import { MicrophoneIcon, ShareIcon, ImageIcon, VideoIcon, TextIcon, GlobeIcon, FileIcon, FolderIcon } from '@radix-ui/react-icons';
import SidebarItem from './SidebarItem';

const items = [
  { icon: <MicrophoneIcon className="w-5 h-5" />, label: 'Voice' },
  { icon: <ShareIcon className="w-5 h-5" />, label: 'Share' },
  { icon: <ImageIcon className="w-5 h-5" />, label: 'Image' },
  { icon: <VideoIcon className="w-5 h-5" />, label: 'Video' },
  { icon: <TextIcon className="w-5 h-5" />, label: 'Text' },
  { icon: <GlobeIcon className="w-5 h-5" />, label: 'Web' },
  { icon: <FileIcon className="w-5 h-5" />, label: 'File' },
  { icon: <FolderIcon className="w-5 h-5" />, label: 'Folder' },
];

const Sidebar = () => {
  return (
    <div className="w-16 bg-white border-r border-gray-200 flex flex-col items-center py-4">
      {items.map((item, index) => (
        <SidebarItem key={index} icon={item.icon} label={item.label} />
      ))}
    </div>
  );
};

export default Sidebar;