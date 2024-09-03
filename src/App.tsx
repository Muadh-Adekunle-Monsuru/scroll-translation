import { useMutation, useQuery } from 'convex/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { api } from '../convex/_generated/api';
import Card from './Card';
import { Id } from '../convex/_generated/dataModel';
function App() {
	const [userId, setUserId] = useState<Id<'documents'>>();
	const { scrollY } = useScroll();
	const scroll = useTransform(
		scrollY,
		[0, window.innerHeight],
		['100', '-100rem']
	);
	const [isConnected, setIsConnected] = useState(false);
	const addUser = useMutation(api.actions.addUser);
	const users = useQuery(api.actions.GetAllUsers);
	useEffect(() => {
		const createuser = async () => {
			const id = nanoid();
			setUserId(id as Id<'documents'>);
			await addUser({ userId: id });
		};
		createuser();
	}, []);

	useEffect(() => {
		if (users) setIsConnected(true);
	}, [users]);

	useEffect(() => {
		const handleClose = () => {
			if (!userId) return;
			const payload = JSON.stringify('hello');
			const url = 'https://terrific-cricket-106.convex.site/removeUser';

			navigator.sendBeacon(url, payload);
		};

		window.addEventListener('beforeunload', handleClose);

		return () => {
			window.removeEventListener('beforeunload', handleClose);
		};
	}, [userId]);

	return (
		<section>
			<div className='h-[200vh] bg-slate-200 w-full'>
				<div className='flex gap-2 fixed top-5 right-5 z-10 items-center'>
					<div
						className={`size-6 rounded-full ${
							isConnected ? 'bg-green-400 animate-pulse' : 'bg-gray-400'
						} `}
					></div>
					<span className='text-sm text-white font-mono uppercase'>
						{users?.users?.length}
					</span>
				</div>
				<div className='h-screen bg-[#1f1f1f] sticky top-0 flex items-center justify-center overflow-hidden'>
					<motion.div
						style={{ translateX: scroll }}
						className=' flex justify-between items-center gap-3'
					>
						<Card url='https://images.unsplash.com/photo-1725012858161-59d7edb5d9dd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1716115050249-32c6977bef12?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1720297809982-652d058b73c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1724579242963-ea62ff1f0d72?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1724579242690-72027b44f85e?q=80&w=464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1448301858776-07f780e9c9da?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1666278989331-42ea369bb09b?q=80&w=376&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1724026403614-f5461d17c6cc?q=80&w=871&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://images.unsplash.com/photo-1724805053604-4f189fb90dff?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
						<Card url='https://plus.unsplash.com/premium_photo-1673697239633-5f5b91092bd8?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default App;
