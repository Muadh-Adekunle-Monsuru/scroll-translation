import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { useViewStore } from './store/store';

export default function RainSection() {
	const { scrollY } = useScroll();
	const scroll = useTransform(
		scrollY,
		[window.innerHeight * 4 + 150, window.innerHeight * 5 - 150],
		['100', '-100rem']
	);
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const setView = useViewStore((state) => state.setElementInview);
	useEffect(() => {
		setView('rain');
	}, [inView]);
	return (
		<div className='h-[200vh] bg-inherit' id='rain'>
			<div
				ref={ref}
				className='h-screen sticky top-0 flex items-center justify-center'
			>
				<motion.div
					style={{ translateX: scroll }}
					className='flex justify-between items-center gap-3'
				>
					<Card url='https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1501691223387-dd0500403074?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1511634829096-045a111727eb?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1527766833261-b09c3163a791?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1511294952778-165d813e9eeb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1494714198743-ba35ce177d03?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1519692933481-e162a57d6721?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1544365558-35aa4afcf11f?q=80&w=1936&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1493314894560-5c412a56c17c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1489781879256-fa824b56f24f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1518803194621-27188ba362c9?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1438449805896-28a666819a20?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/uploads/14116603688211a68546c/30f8f30b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
				</motion.div>
			</div>
			<p className='h-[200vh]'></p>
		</div>
	);
}
