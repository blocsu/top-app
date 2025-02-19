import { default as classNames, default as cn } from 'classnames';
import { JSX } from 'react';
import styles from './Header.module.css';
import { HeaderProps } from './Header.props';


export const Header = ({...props}: HeaderProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.Header, classNames)}
		>
			Header
		</div>
	)
	
};