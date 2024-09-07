import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { useViewStore } from './store/store';

export default function SpaceSection() {
	const { scrollY } = useScroll();
	const scroll = useTransform(
		scrollY,
		[window.innerHeight * 2 + 150, window.innerHeight * 3 - 150],
		['100', '-100rem']
	);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const setView = useViewStore((state) => state.setElementInview);
	useEffect(() => {
		setView('space');
	}, [inView]);
	return (
		<div className='h-[200vh]  bg-inherit' id='space'>
			<div
				ref={ref}
				className='h-screen sticky top-0 flex items-center justify-center'
			>
				<motion.div
					style={{ translateX: scroll }}
					className='flex justify-between items-center gap-3'
				>
					<Card url='https://images.unsplash.com/photo-1484589065579-248aad0d8b13?q=80&w=1959&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1446776709462-d6b525c57bd3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1447433589675-4aaa569f3e05?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1541873676-a18131494184?q=80&w=1918&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1460186136353-977e9d6085a1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1502318217862-aa4e294ba657?q=80&w=1915&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1537420327992-d6e192287183?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1504192010706-dd7f569ee2be?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1489549132488-d00b7eee80f1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1457364983758-510f8afa9f5f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1443456066412-3e3ea69ee37c?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1446776899648-aa78eefe8ed0?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1457364887197-9150188c107b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
				</motion.div>
			</div>
			<p className='h-[200vh]'></p>
		</div>
	);
}
