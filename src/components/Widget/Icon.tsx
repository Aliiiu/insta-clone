import { IconBtnType } from '@/src/types/icon.types';
import { Tooltip } from 'antd';
import React from 'react';

const AppButton = ({ children, title, color }: IconBtnType) => {
	return (
		<Tooltip title={title} color={color}>
			{children}
		</Tooltip>
	);
};

export default AppButton;
