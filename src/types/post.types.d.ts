import { ImageProps } from 'next/image';
import { ReactNode } from 'react';

interface IPost {
	name: string;
	profilePicture: ReactNode;
	post: ImageProps['src'];
	caption: string;
	numberOfLikes: number;
}

interface IPostComment {
	caption: string;
	likes: number;
	name: string;
}

interface IShowMore {
	caption: string;
	name: string;
	maxLength: number;
}
