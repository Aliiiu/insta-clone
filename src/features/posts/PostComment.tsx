import Image from 'next/image';
import React, { useState } from 'react';
import like from '../../assets/svgs/like.svg';
import likedIcon from '../../assets/svgs/liked.svg';
import chat from '../../assets/svgs/chat.svg';
import share from '../../assets/svgs/share.svg';
import bookmark from '../../assets/svgs/save.svg';
import smiley from '../../assets/svgs/smiley.svg';
import AppButton from '../../components/Widget/Icon';
import { Input } from 'antd';
import { PostCommentTypes } from '@/src/types/post.types';
import ShowMoreCation from '../../components/Typography/ShowMoreCation';

const PostComment = ({ caption, likes, name }: PostCommentTypes) => {
	const [liked, setLiked] = useState(false);
	const [numberOfLike, setNumberOfLikes] = useState(() => likes);

	function handleLikeClick() {
		setLiked(!liked);
		updateLikeStatus(!liked);
	}

	function updateLikeStatus(liked: boolean) {
		// Make an API call to update the like status on the server
		if (liked) {
			setNumberOfLikes((prev) => prev + 1);
		} else {
			setNumberOfLikes((prev) => prev - 1);
		}
	}
	return (
		<div className=''>
			<div className='flex px-3 py-4 justify-between pb-4 w-full'>
				<div className='flex gap-x-3 items-center ml-3'>
					<AppButton title='Like' color='pink'>
						<button onClick={handleLikeClick} className='relative w-6 h-full'>
							<Image src={liked ? likedIcon : like} alt='like icon' fill />
						</button>
					</AppButton>
					<AppButton title='Chat' color='green'>
						<button className='relative w-6 h-full'>
							<Image src={chat} alt='like icon' fill />
						</button>
					</AppButton>
					<AppButton title='Share' color='black'>
						<button className='relative w-6 h-full'>
							<Image src={share} alt='like icon' fill />
						</button>
					</AppButton>
				</div>
				<AppButton title='Save' color='black'>
					<button className='relative h-6 w-4'>
						<Image src={bookmark} alt='bookmark' fill />
					</button>
				</AppButton>
			</div>
			<div className='px-3 pb-4'>
				<h3 className='font-semibold text-sm text-black01'>
					{numberOfLike} likes
				</h3>
				<ShowMoreCation name={name} caption={caption} maxLength={70} />
				<p className='text-gray02'>View all 100 comments</p>
				<small className='text-gray02 text-[10px] uppercase'>1 hour ago</small>
			</div>
			<div className='border-t px-4 py-4 flex justify-between items-center border-gray01'>
				<div className='flex gap-x-2 items-center'>
					<div className='relative w-6 h-6'>
						<Image src={smiley} alt='smiley' fill />
					</div>
					<Input bordered={false} placeholder='Add comment...' />
				</div>
				<button className='text-blue01 text-opacity-50'>Post</button>
			</div>
		</div>
	);
};

export default PostComment;
