import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Card from './Card';
import { useEffect } from 'react';
import { useViewStore } from './store/store';

export default function FlowerSection() {
	const { scrollY } = useScroll();
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	const scroll = useTransform(
		scrollY,
		[0, window.innerHeight - 150],
		['100', '-100rem']
	);
	const setView = useViewStore((state) => state.setElementInview);
	useEffect(() => {
		setView('flowers');
	}, [inView]);
	return (
		<div ref={ref} className='h-[200vh] bg-inherit' id='flowers'>
			<div className='h-screen sticky top-0 flex items-center justify-center '>
				<motion.div
					style={{ translateX: scroll }}
					className='flex justify-between items-center gap-3'
				>
					<Card url='https://images.unsplash.com/photo-1725012858161-59d7edb5d9dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1716115050249-32c6977bef12?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1720297809982-652d058b73c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1515865404355-ddb5b0910878?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1502164980785-f8aa41d53611?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1463043254199-7a3efd782ad1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1433208406127-d9e1a0a1f1aa?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1488718729626-53eaa41c0848?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1485560994238-db4592aa1a6e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1458820914391-3ecf87d927fb?q=80&w=1902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1539077947130-4660a917c94b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://images.unsplash.com/photo-1639374593182-88b49b80a688?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					<Card url='https://plus.unsplash.com/premium_photo-1676475964992-6404b8db0b53?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
				</motion.div>
			</div>
			<p className='h-[200vh]'></p>
		</div>
	);
}
