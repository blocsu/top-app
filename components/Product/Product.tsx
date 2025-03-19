import cn from 'classnames';
import { JSX } from 'react';
import styles from './Product.module.css';
import { ProductProps } from './Product.props';


export const Product = ({product, className, ...props}: ProductProps): JSX.Element => {
	return (
		<div className={cn(styles.product)}>
			{product.title}
		</div>
	);
};