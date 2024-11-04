import { memo } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import { getIcon } from '../utils/icons';

const CustomNode = ({ data }: NodeProps) => {
  const Icon = getIcon(data.icon);

  return (
    <div className="px-4 py-2 shadow-md rounded-md bg-white border-2 border-gray-200">
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      <div className="flex items-center">
        <div className="rounded-full w-10 h-10 flex items-center justify-center bg-gray-100">
          {Icon && <Icon className="w-6 h-6 text-gray-600" />}
        </div>
        <div className="ml-2">
          <div className="text-sm font-medium">{data.label}</div>
        </div>
      </div>
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
};

export default memo(CustomNode);