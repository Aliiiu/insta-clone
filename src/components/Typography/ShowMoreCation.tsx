import { IShowMore } from '@/src/types/post.types';
import React, { useState } from 'react';

const ShowMoreCation = ({ caption, name, maxLength }: IShowMore) => {
	const [showFullText, setShowFullText] = useState(false);

	const handleShowFullText = () => {
		setShowFullText((prev) => !prev);
	};
	return (
		<div className='flex justify-between gap-x-1 w-full'>
			<h3 className='text-sm font-semibold'>{name} </h3>{' '}
			{showFullText ? (
				<p className='text-sm'>{caption}</p>
			) : (
				<>
					<p className='text-sm md:hidden'>{caption.slice(0, 50)}</p>
					<p className='text-sm hidden lg:hidden md:inline-flex'>
						{caption.slice(0, 55)}
					</p>
					<p className='text-sm hidden lg:inline-flex'>
						{caption.slice(0, maxLength)}
					</p>
				</>
			)}
			<button onClick={handleShowFullText} className='text-sm text-gray02'>
				{showFullText ? '...less' : '...more'}
			</button>
		</div>
	);
};

export default ShowMoreCation;
