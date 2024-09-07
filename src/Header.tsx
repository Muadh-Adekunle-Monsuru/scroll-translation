import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useViewStore } from './store/store';
export default function Header() {
	const [position, setPosition] = useState({
		left: 0,
		width: 0,
		opacity: 0,
	});
	const sections = [
		{ label: 'flowers' },
		{ label: 'space' },
		{ label: 'rain' },
		{ label: 'sunset' },
		{ label: 'moon' },
	];

	const handleHover = (ref: any) => {
		console.log(ref.current.getBoundingClientRect());
		const { width } = ref.current.getBoundingClientRect();
		setPosition({
			left: ref.current.offsetLeft,
			width,
			opacity: 1,
		});
	};
	const elementInView = useViewStore((state) => state.elementInView);
	useEffect(() => {
		console.log('current element in view', elementInView);
	}, [elementInView]);

	return (
		<div className='w-full fixed top-2 z-20 grid place-items-center'>
			<div
				onMouseLeave={() => {
					setPosition((prev) => ({ ...prev, opacity: 0 }));
				}}
				className='w-fit  rounded-full border-2 border-black p-2 bg-gray-100/30  backdrop-blur-sm shadow-lg flex  items-center justify-between relative'
			>
				{sections.map((section) => {
					const ref = useRef(null);
					return (
						<p
							ref={ref}
							key={section.label}
							onMouseEnter={() => handleHover(ref)}
							onClick={() => {
								const item = document.getElementById(section.label);
								if (item)
									item.scrollIntoView({ behavior: 'smooth', block: 'start' });
							}}
							className={`uppercase text-xs font-medium relative select-none px-2 md:px-5 py-1.5 cursor-pointer mix-blend-difference text-white z-10 first:pl-5  rounded-full`}
						>
							{section.label}
						</p>
					);
				})}

				<BackgroundPill position={position} />
			</div>
		</div>
	);
}

function BackgroundPill({ position }: { position: any }) {
	return (
		<motion.div
			animate={position}
			className='h-10  bg-black absolute   rounded-full z-0'
		/>
	);
}
