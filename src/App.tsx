import { useMutation, useQuery } from 'convex/react';
import { nanoid } from 'nanoid';
import { useEffect, useState } from 'react';
import { api } from '../convex/_generated/api';
import { Id } from '../convex/_generated/dataModel';
import FlowerSection from './FlowerSection';
import Header from './Header';
import MoonSection from './MoonSection';
import RainSection from './RainSection';
import SpaceSection from './SpaceSection';
import SunsetSection from './SunsetSection';
import { useViewStore } from './store/store';
function App() {
	const [userId, setUserId] = useState<Id<'documents'>>();
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

	const elementInView = useViewStore((state) => state.elementInView);
	return (
		<section className='custom'>
			<div
				className={`h-[200vh]  w-full custom transition duration-500 
				${elementInView == 'flowers' && 'bg-red-200'}
				${elementInView == 'space' && 'bg-blue-200'}
				${elementInView == 'rain' && 'bg-yellow-200'}
				${elementInView == 'sunset' && 'bg-orange-200'}
				${elementInView == 'moon' && 'bg-[#1f1f1f]'}
				`}
			>
				<Header />
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
				<FlowerSection />
				<SpaceSection />
				<RainSection />
				<SunsetSection />
				<MoonSection />
			</div>
		</section>
	);
}

export default App;
