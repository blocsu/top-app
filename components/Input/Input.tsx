import cn from 'classnames';
import { ForwardedRef, forwardRef, JSX } from 'react';
import styles from './Input.module.css';
import { InputProps } from './Input.props';


export const Input = forwardRef(({className, error, ...props}: InputProps, ref: ForwardedRef<HTMLInputElement>): JSX.Element => {
	return (
		<div className={cn(className, styles.inputWrapper)}>
			<input className={cn(styles.input, {
				[styles.error]: error
			})} ref={ref} {...props} />
			{error && <span role="alert" className={styles.errorMessage}>{error.message}</span>}
		</div>
	);
});

Input.displayName = 'Input';
