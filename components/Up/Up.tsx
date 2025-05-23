import { useScrollY } from '@/hooks/useScrollY';
import { motion, useAnimation } from 'framer-motion';
import { JSX, useEffect } from 'react';
import { Buttonicon } from '../Buttonicon/Buttonicon';
import styles from './Up.module.css';

export const Up = (): JSX.Element => {
	const controls = useAnimation();
	const y = useScrollY();

	useEffect(() => {
		controls.start({ opacity: y / document.body.scrollHeight });
	}, [y, controls]);
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		});
	};
	return (
		<motion.div 
			className={styles.up}
			animate={controls}
			initial={{opacity: 0}}
		>
			<Buttonicon appearance='primary' icon='up' onClick={scrollToTop} />		
		</motion.div>
	);
};