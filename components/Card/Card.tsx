import cn from 'classnames';
import { JSX } from 'react';
import styles from './Card.module.css';
import { CardProps } from './Card.props';


export const Card = ({color = 'white', children, className, ...props}: CardProps): JSX.Element => {
	return (
		<div className={cn(styles.white, className, {
			[styles.blue]: color == 'blue'
		})} {...props}>
			{children}
		</div>
	);
};