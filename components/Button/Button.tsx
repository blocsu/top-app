import cn from 'classnames';
import { motion, useMotionValue } from 'framer-motion';
import { JSX, useEffect } from 'react';
import ArrowIcon from './arrow.svg';
import styles from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {
	const scale = useMotionValue(1);

	useEffect(() => {
		scale.on('change', (s) => {console.log(s)})
	}, []);
	return (
		<motion.button
			whileHover={{scale: 1.05}}
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
			{arrow != 'none' && <span className={cn(styles.arrow, {
				[styles.down]: arrow == 'down'
			})}>
					<ArrowIcon />
				</span>}
		</motion.button>
	);
};