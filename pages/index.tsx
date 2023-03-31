import Head from 'next/head';
import Stories from '@/src/features/story/Story';
import Posts from '@/src/features/posts/Posts';
import Profile from '@/src/features/profile/Profile';
import { postList } from '@/src/constants/postLists';
import PageLayout from '@/src/components/Layout/PageLayout';

export default function Home() {
	return (
		<>
			<Head>
				<title>Instagram</title>
			</Head>
			<PageLayout>
				<div className='container max-w-[1100px] xl:px-20 h-full pb-2 mx-auto flex gap-x-7 md:px-0'>
					<div className='md:border border-gray01 bg-white h-full overflow-y-auto scrollbar-hide w-full md:w-[65%]'>
						<Stories />
						{postList.map((item) => (
							<Posts
								key={item.id}
								name={item.name}
								post={item.post}
								profilePicture={item.profile_pic}
								caption={item.caption}
								numberOfLikes={item.number_of_likes}
							/>
						))}
					</div>
					<div className='bg-white hidden md:pr-4 xl:pr-0 md:block w-[35%]'>
						<Profile />
					</div>
				</div>
			</PageLayout>
		</>
	);
}
