import { default as classNames, default as cn } from 'classnames';
import { JSX } from 'react';
import styles from './Sidebar.module.css';
import { SidebarProps } from './Sidebar.props';


export const Sidebar = ({...props}: SidebarProps): JSX.Element => {
	return (
		<div {...props} className={cn(styles.Sidebar, classNames)}
		>
			Sidebar
		</div>
	)
	
};