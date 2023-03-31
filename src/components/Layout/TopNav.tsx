import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/svgs/IGLogo.svg';
import HomeLogo from '../../assets/svgs/home.svg';
import Messenger from '../../assets/svgs/messenger.svg';
import Post from '../../assets/svgs/NewPosts.svg';
import Navigation from '../../assets/svgs/navigation.svg';
import Notification from '../../assets/svgs/like.svg';
import Tooltip from '../Widget/Tooltip';
import { Avatar, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const TopNav = () => {
	return (
		<header className='z-30 sticky top-0 left-0 right-0 bg-white border-b border-gray01 h-14 flex items-center justify-center'>
			<div className='container max-w-[1100px] xl:px-20 px-4 mx-auto'>
				<div className='flex justify-between w-full'>
					<Image
						src={'/svgs/igLogo.svg'}
						alt='IG Logo'
						width={103}
						height={29}
					/>
					<div className='border border-gray01 w-full max-w-[215px] flex justify-center rounded'>
						<div className=' max-w-[89px]'>
							<Input
								bordered={false}
								placeholder='Search'
								className='text-gray01'
								prefix={<SearchOutlined className='text-gray01' />}
							/>
						</div>
					</div>
					<div className='hidden md:flex gap-x-3 items-center'>
						<Tooltip
							color='black'
							title='home'
							icon={
								<div className=' w-6 h-6 relative'>
									<Image src={'/svgs/home.svg'} alt='home-icon' fill />
								</div>
							}
						/>
						<Tooltip
							color='black'
							title='messenger'
							icon={
								<div className=' w-6 h-6 relative'>
									<Image src={'/svgs/messenger.svg'} alt='home-icon' fill />
								</div>
							}
						/>
						<Tooltip
							color='black'
							title='New Post'
							icon={
								<div className=' w-6 h-6 relative'>
									<Image
										src={'/svgs/newPosts.svg'}
										alt='home-icon'
										width={25}
										height={25}
									/>
								</div>
							}
						/>
						<Tooltip
							color='black'
							title='Explore'
							icon={
								<div className=' w-6 h-6 relative'>
									<Image src={'/svgs/navigation.svg'} alt='home-icon' fill />
								</div>
							}
						/>
						<Tooltip
							color='black'
							title='Notifications'
							icon={
								<div className=' w-6 h-6 relative'>
									<Image
										src={'/svgs/like.svg'}
										alt='home-icon'
										width={25}
										height={25}
									/>
								</div>
							}
						/>
						<Avatar src='/images/pic1.png' className='w-6 h-6' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default TopNav;
