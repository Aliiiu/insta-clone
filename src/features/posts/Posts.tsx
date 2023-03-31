import Tooltip from '@/src/components/Widget/Tooltip';
import { IPost } from '@/src/types/post.types';
import { EllipsisOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import Avatar from '../../components/Widget/Avatar';
import PostComment from './PostComment';

const Posts = ({
	name,
	profilePicture,
	post,
	caption,
	numberOfLikes,
}: IPost) => {
	return (
		<>
			<div className='border-t border-gray01 py-2 px-4 flex justify-between items-center'>
				<div className='flex items-center gap-x-4'>
					<Avatar img={profilePicture} showName={false} styles='w-9 h-9' />
					<h4 className='text-sm'>{name}</h4>
				</div>
				<Tooltip
					title='see more'
					color='black'
					icon={<EllipsisOutlined style={{ color: '#000000' }} />}
				/>
			</div>
			<div className='w-full h-[500px] md:h-[614px] relative'>
				<Image src={post} alt='post1' fill />
			</div>
			<PostComment caption={caption} likes={numberOfLikes} name={name} />
		</>
	);
};

export default Posts;
