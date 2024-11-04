import {
  MicrophoneIcon,
  ShareIcon,
  ImageIcon,
  VideoIcon,
  TextIcon,
  GlobeIcon,
  FileIcon,
  FolderIcon,
} from '@radix-ui/react-icons';

const iconMap: { [key: string]: any } = {
  Voice: MicrophoneIcon,
  Share: ShareIcon,
  Image: ImageIcon,
  Video: VideoIcon,
  Text: TextIcon,
  Web: GlobeIcon,
  File: FileIcon,
  Folder: FolderIcon,
};

export const getIcon = (type: string) => {
  return iconMap[type] || FileIcon;
};