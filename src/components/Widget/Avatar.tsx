import { Avatar as AntdAvatar } from 'antd';
import React, { ReactNode } from 'react';

const Avatar = ({ img, name, showName, styles }: IAvatar) => {
	return (
		<div className='flex flex-col'>
			<div className='bg-gradient-to-b from-[#DE0046] to-[#F7A34B] rounded-full w-fit p-[2.5px]'>
				<div className='bg-white w-full h-full rounded-full p-[1px]'>
					<AntdAvatar src={img} className={`${styles}`} />
				</div>
			</div>
			{showName && <p className='text-xs text-black01 font-light'>{name}</p>}
		</div>
	);
};

export default Avatar;
