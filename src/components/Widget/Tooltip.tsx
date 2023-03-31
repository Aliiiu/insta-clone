import { IIconBtn } from '@/src/types/icon.types';
import { Button, Tooltip as AntTooltip } from 'antd';
import React from 'react';

const Tooltip = ({ icon, title, color }: IIconBtn) => {
	return (
		<AntTooltip title={title} color={color}>
			<Button type='link' icon={icon} />
		</AntTooltip>
	);
};

export default Tooltip;
