import cn from 'classnames';
import { JSX } from 'react';
import styles from './Buttonicon.module.css';
import { ButtoniconProps, icons } from './Buttonicon.props';

export const Buttonicon = ({appearance, icon, className, ...props}: ButtoniconProps): JSX.Element => {
	const IconComp = icons[icon];
	return (
		<button
			className={cn(styles.button, className, {
				[styles.primary]: appearance == 'primary',
				[styles.white]: appearance == 'white'
			})}
			{...props}
		>
			<IconComp />
		</button>
	);
};