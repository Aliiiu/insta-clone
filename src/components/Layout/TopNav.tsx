import React from 'react';
import Image from 'next/image';
import Logo from '../../assets/svgs/IGLogo.svg';
import Search from '../../assets/svgs/Search.svg';
import HomeLogo from '../../assets/svgs/home.svg';
import Messenger from '../../assets/svgs/messenger.svg';
import Post from '../../assets/svgs/NewPosts.svg';
import Navigation from '../../assets/svgs/navigation.svg';
import Notification from '../../assets/svgs/like.svg';
import AppButton from '../Widget/Icon';
import { Avatar, Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

const TopNav = () => {
	return (
		<header className='z-30 sticky top-0 left-0 right-0 bg-white border-b border-gray01 h-14 flex items-center justify-center'>
			<div className='container max-w-[1100px] xl:px-20 px-4 mx-auto'>
				<div className='flex justify-between w-full'>
					<Image src={Logo} alt='IG Logo' width={103} height={29} />
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
					<div className='hidden md:flex gap-x-5 items-center'>
						<AppButton color='black' title='home'>
							<button className=' w-6 h-6 relative'>
								<Image src={HomeLogo} alt='home-icon' fill />
							</button>
						</AppButton>
						<AppButton color='black' title='messenger'>
							<button className=' w-6 h-6 relative'>
								<Image src={Messenger} alt='home-icon' fill />
							</button>
						</AppButton>
						<AppButton color='black' title='New Post'>
							<button className=' w-6 h-6 relative'>
								<Image src={Post} alt='home-icon' width={25} height={25} />
							</button>
						</AppButton>
						<AppButton color='black' title='Explore'>
							<button className=' w-6 h-6 relative'>
								<Image src={Navigation} alt='home-icon' fill />
							</button>
						</AppButton>
						<AppButton color='black' title='Notifications'>
							<button className=' w-6 h-6 relative'>
								<Image
									src={Notification}
									alt='home-icon'
									width={25}
									height={25}
								/>
							</button>
						</AppButton>
						<Avatar src='/images/pic1.png' className='w-6 h-6' />
					</div>
				</div>
			</div>
		</header>
	);
};

export default TopNav;
