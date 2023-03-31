import { storyList } from '@/src/constants/storyList';
import { Carousel } from 'antd';
import React, { CSSProperties, useEffect, useState } from 'react';
import AvatarBadge from '../../components/Widget/Avatar';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';

const arrowSize = 20;
const arrowOffset = 20;
const arrow: CSSProperties = {
	color: '#fff',
	fontSize: arrowSize,
	height: arrowSize,
	width: arrowSize,
	zIndex: 1,
};

interface AntdArrowProps {
	currentSlide?: number;
	slideCount?: number;
}

interface ArrowProps {
	direction: 'left' | 'right';
}

const Arrow = ({
	currentSlide,
	direction,
	slideCount,
	...carouselProps
}: ArrowProps & AntdArrowProps) =>
	direction === 'left' ? (
		<>
			<LeftOutlined
				className='icon'
				{...carouselProps}
				style={{
					...arrow,
					left: arrowOffset,
					top: 50,
					color: '#8E8E8E',
					width: '24px',
					height: '24px',
					backgroundColor: '#fff',
					fontSize: '38px',
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					borderRadius: '50%',
				}}
			/>
		</>
	) : (
		<RightOutlined
			{...carouselProps}
			style={{
				...arrow,
				right: arrowOffset,
				top: 50,
				color: '#8E8E8E',
				width: '24px',
				height: '24px',
				backgroundColor: '#fff',
				fontSize: '38px',
				display: 'flex',
				justifyContent: 'space-between',
				alignItems: 'center',
				borderRadius: '50%',
			}}
		/>
	);

const Stories = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [nextSlide, setNextSlide] = useState(0);

	const handleBeforeChange = (current: number, next: number) => {
		console.log(`${current}, ${next}`);
		setCurrentSlide(current);
		setNextSlide(next);
	};

	const [itemsToShow, setItemsToShow] = useState(3);

	const handleResize = () => {
		if (window.innerWidth < 768) {
			setItemsToShow(5);
		} else if (window.innerWidth < 820) {
			setItemsToShow(6);
		} else {
			setItemsToShow(7);
		}
	};

	useEffect(() => {
		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
		<div className='w-full overflow-x-auto'>
			<div className=''>
				<Carousel
					dots={false}
					arrows={true}
					slidesToShow={itemsToShow}
					beforeChange={handleBeforeChange}
					nextArrow={<Arrow direction='right' />}
					prevArrow={
						currentSlide != 0 || nextSlide !== 0 ? (
							<Arrow direction='left' />
						) : (
							<></>
						)
					}
					infinite={false}
					className='flex gap-x-4 py-4 pl-6'
				>
					{storyList.map((item) => (
						<AvatarBadge
							img={item.img}
							key={item.id}
							name={item.name}
							styles='w-10 h-10 md:w-14 md:h-14'
							showName
						/>
					))}
				</Carousel>
			</div>
		</div>
	);
};

export default Stories;
