import { ILayout } from '@/src/types/layout.types';
import React from 'react';
import TopNav from './TopNav';

const PageLayout = ({ children }: ILayout) => {
	return (
		<>
			<TopNav />
			<main className='bg-white h-[calc(100vh-56px)] w-full md:pt-7'>
				{children}
			</main>
		</>
	);
};

export default PageLayout;
