import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

interface PostTypes {
	name: string;
	profile_pic: ReactNode;
	post: ImageProps['src'];
	caption: string;
	number_of_likes: number;
}

interface PostCommentTypes {
	caption: string;
	likes: number;
	name: string;
}

interface ShowMoreTypes {
	caption: string;
	name: string;
	maxLength: number;
}
