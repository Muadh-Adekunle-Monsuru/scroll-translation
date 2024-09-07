import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { useViewStore } from './store/store';

export default function MoonSection() {
	const { scrollY } = useScroll();
	const scroll = useTransform(
		scrollY,
		[window.innerHeight * 8 + 150, window.innerHeight * 9 - 150],
		['100', '-100rem']
	);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const setView = useViewStore((state) => state.setElementInview);
	useEffect(() => {
		setView('moon');
	}, [inView]);
	return (
		<div className='h-[200vh] bg-inherit' id='moon'>
			<div
				ref={ref}
				className='h-screen sticky top-0 flex items-center justify-center'
			>
				<motion.div
					style={{ translateX: scroll }}
					className='flex justify-between items-center gap-3'
				>
					<Card url='https://images.unsplash.com/photo-1578615437406-511cafe4a5c7?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1514897575457-c4db467cf78e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1503416997304-7f8bf166c121?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1518352724948-729151797553?q=80&w=1892&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1527842891421-42eec6e703ea?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1490814525860-594e82bfd34a?q=80&w=1795&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1515311320503-6e3d309537b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1509721434272-b79147e0e708?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1445146484482-fb1e008bfedc?q=80&w=1881&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1495855720902-bb60e936d7ca?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1509978778156-518eea30166b?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1501523321-8ecb927b4be6?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
				</motion.div>
			</div>
			{/* <p className='h-[200vh]'></p> */}
		</div>
	);
}
