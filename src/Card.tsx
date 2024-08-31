import { motion } from 'framer-motion';
export default function Card({ url }: { url: string }) {
	return (
		<motion.div
			initial={{
				transform: '0',
				borderWidth: '2px',
			}}
			whileHover={{
				transform: 'skew(1deg,1deg)',
				borderWidth: '8px',
			}}
			className='min-w-80 overflow-hidden h-80 border-2 rounded-md flex flex-col items-center justify-center'
		>
			<motion.img
				whileHover={{
					transform: 'skew(1deg,1deg)',
				}}
				src={url}
				className='w-full h-full object-cover'
			/>
		</motion.div>
	);
}
