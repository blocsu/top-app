import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';
import close from './close.svg';
import menu from './menu.svg';
import up from './up.svg';

export const icons = {
	up,
	close,
	menu
};

export type iconName = keyof typeof icons;

export interface ButtoniconProps extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	icon: iconName;
	appearance: 'primary' | 'white';
}