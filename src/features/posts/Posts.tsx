import { PostTypes } from '@/src/types/post.types';
import { EllipsisOutlined } from '@ant-design/icons';
import Image from 'next/image';
import React from 'react';
import AvatarBadge from '../../components/Widget/Avatar';
import PostComment from './PostComment';

const Posts = ({
	name,
	profile_pic,
	post,
	caption,
	number_of_likes,
}: PostTypes) => {
	return (
		<>
			<div className='border-t border-gray01 py-2 px-4 flex justify-between items-center'>
				<div className='flex items-center gap-x-4'>
					<AvatarBadge img={profile_pic} showName={false} styles='w-9 h-9' />
					<h4 className='text-sm'>{name}</h4>
				</div>
				<EllipsisOutlined />
			</div>
			<div className='w-full h-[500px] md:h-[614px] relative'>
				<Image src={post} alt='post1' fill />
			</div>
			<PostComment caption={caption} likes={number_of_likes} name={name} />
		</>
	);
};

export default Posts;
