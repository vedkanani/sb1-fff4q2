import { clsx } from 'clsx';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label }) => {
  const onDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.dataTransfer.setData('application/reactflow', label);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <div
      className={clsx(
        'w-12 h-12 mb-2 flex items-center justify-center rounded-lg',
        'hover:bg-gray-100 cursor-grab transition-colors',
        'group relative'
      )}
      draggable
      onDragStart={onDragStart}
    >
      <div className="text-gray-600 group-hover:text-gray-900">
        {icon}
      </div>
      <div className="absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity whitespace-nowrap">
        {label}
      </div>
    </div>
  );
};

export default SidebarItem;