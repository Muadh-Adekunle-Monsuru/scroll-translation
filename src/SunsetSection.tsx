import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { useViewStore } from './store/store';

export default function SunsetSection() {
	const { scrollY } = useScroll();
	const scroll = useTransform(
		scrollY,
		[window.innerHeight * 6 + 150, window.innerHeight * 7 - 150],
		['100', '-100rem']
	);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const setView = useViewStore((state) => state.setElementInview);
	useEffect(() => {
		setView('sunset');
	}, [inView]);
	return (
		<div className='h-[200vh] bg-inherit' id='sunset'>
			<div
				ref={ref}
				className='h-screen sticky top-0 flex items-center justify-center'
			>
				<motion.div
					style={{ translateX: scroll }}
					className='flex justify-between items-center gap-3'
				>
					<Card url='https://images.unsplash.com/photo-1422493757035-1e5e03968f95?q=80&w=2008&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1481988535861-271139e06469?q=80&w=1790&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1495616811223-4d98c6e9c869?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1494459940152-1e911caa8cc5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1502739391963-eda719c24cd4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1512641406448-6574e777bec6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1500964757637-c85e8a162699?q=80&w=1806&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1517685633466-403d6955aeab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1494548162494-384bba4ab999?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1474524955719-b9f87c50ce47?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1475924156734-496f6cac6ec1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1490682143684-14369e18dce8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
				</motion.div>
			</div>
			<p className='h-[200vh]'></p>
		</div>
	);
}
