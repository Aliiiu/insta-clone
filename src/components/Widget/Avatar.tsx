import { Avatar } from 'antd';
import Image, { ImageProps } from 'next/image';
import React, { ReactNode } from 'react';

const AvatarBadge = ({ img, name, showName, styles }: AvatarTypes) => {
	return (
		<div className='flex flex-col'>
			<div className='bg-gradient-to-b from-[#DE0046] to-[#F7A34B] rounded-full w-fit p-[2.5px]'>
				<div className='bg-white w-full h-full rounded-full p-[1px]'>
					<Avatar src={img} className={`${styles}`} />
				</div>
			</div>
			{showName && <p className='text-xs text-black01 font-light'>{name}</p>}
		</div>
	);
};

export default AvatarBadge;
