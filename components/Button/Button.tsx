import cn from 'classnames';
import { JSX } from 'react';
import style from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({appearance, children, className, ...props}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(style.button, className, {
				[style.primary]: appearance == 'primary',
				[style.ghost]: appearance == 'ghost'
			})}
			{...props}
		>
			{children}
		</button>
	);
};