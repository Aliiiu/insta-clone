import { followers } from '@/src/constants/followers';
import { footer } from '@/src/constants/suggestions';
import { Avatar } from 'antd';
import Image from 'next/image';
import React from 'react';

const Profile = () => {
	return (
		<div className='flex flex-col gap-y-4 pt-5'>
			<div className='flex justify-between items-center'>
				<div className='flex items-center gap-x-3'>
					<Avatar src={'/images/pic1.png'} className='w-14 h-14' />
					<div className='flex flex-col'>
						<h5>shirleyromero</h5>
						<h6 className='text-gray01'>Shirley Romero</h6>
					</div>
				</div>
				<button className='text-blue01 text-xs font-semibold'>Switch</button>
			</div>
			<div className='flex flex-col gap-y-3'>
				<div className='flex justify-between items-center'>
					<h5 className='font-semibold text-gray01'>Suggestions For You</h5>
					<button className='text-black01 text-xs'>See All</button>
				</div>
				{followers.map((item) => (
					<div key={item.id} className='flex justify-between items-center'>
						<div className='flex items-center gap-x-3'>
							<Avatar src={item.img} className='w-9 h-9' />
							<div className='flex flex-col'>
								<h5>{item.username}</h5>
								<h6 className='text-gray01 text-xs'>{item.follower}</h6>
							</div>
						</div>
						<button className='text-blue01 text-[10px] font-semibold capitalize'>
							follow
						</button>
					</div>
				))}
			</div>
			<div>
				<div className='flex flex-wrap gap-2'>
					{footer.map((item) => (
						<p key={item.id} className='text-gray03 text-[11px]'>
							{item.title}
						</p>
					))}
				</div>
			</div>
			<small className='text-gray03'>© 2021 Instagram from Meta</small>
		</div>
	);
};

export default Profile;
