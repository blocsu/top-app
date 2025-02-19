import { default as classNames, default as cn } from 'classnames';
import { JSX } from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';


export const Footer = ({...props}: FooterProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.Footer, classNames)}
		>
			Footer!
		</div>
	)
	
};