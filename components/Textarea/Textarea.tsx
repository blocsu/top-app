import cn from 'classnames';
import { ForwardedRef, forwardRef, JSX } from 'react';
import styles from './Textarea.module.css';
import { TextareaProps } from './Textarea.props';


export const Textarea = forwardRef(({className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
	return (
		<textarea className={cn(className, styles.input)} ref={ref} {...props} />
	);
});