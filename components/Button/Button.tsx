import cn from 'classnames';
import { JSX } from 'react';
import style from './Button.module.css';
import { ButtonProps } from './Button.props';

export const Button = ({appearance, children}: ButtonProps): JSX.Element => {
	return (
		<button
			className={cn(style.button, {
				[style.primary]: appearance == 'primary',
				[style.ghost]: appearance == 'ghost'
			})}
		>
			{children}
		</button>
	);
};