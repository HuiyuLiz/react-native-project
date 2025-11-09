import React from 'react';
import * as MaterialIcons from 'react-icons/md';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
  style?: any;
}

const iconNameMap: { [key: string]: string } = {
  'check-box': 'MdCheckBox',
  'check-box-outline-blank': 'MdCheckBoxOutlineBlank',
  check: 'MdCheck',
  edit: 'MdEdit',
  delete: 'MdDelete',
  add: 'MdAdd',
  'add-circle': 'MdAddCircle',
  remove: 'MdRemove',
  close: 'MdClose',
};

const Icon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = '#000',
  style,
}) => {
  // 先查找映射表
  let iconName = iconNameMap[name];

  // 如果映射表中沒有，嘗試自動轉換
  if (!iconName) {
    iconName =
      'Md' +
      name
        .split('-')
        .map(part => part.charAt(0).toUpperCase() + part.slice(1))
        .join('');
  }

  const IconComponent = (MaterialIcons as any)[iconName];

  if (!IconComponent) {
    console.warn(`Icon ${name} (${iconName}) not found`);
    // 返回一個默認的 icon
    return (
      <MaterialIcons.MdHelpOutline size={size} color={color} style={style} />
    );
  }

  return <IconComponent size={size} color={color} style={style} />;
};

export default Icon;
