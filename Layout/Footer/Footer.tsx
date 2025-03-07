import cn from 'classnames';
import { format } from 'date-fns';
import { JSX } from 'react';
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';


export const Footer = ({className, ...props}: FooterProps): JSX.Element => {
	return (
		<footer className={cn(className, styles.footer)} {...props} >
			<div>
				OwlTop © 2020 - {format(new Date(), 'yyyy')} Все права защищены
			</div>
			<a href='#' target='blank'>Пользовательское соглашение</a>
			<a href='#' target='blank'>Политика конфиденциальности</a>
		</footer>
	)
	
};