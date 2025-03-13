import { JSX } from 'react';
import { TopPageComponentsProps } from './TopPageComponent.props';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentsProps): JSX.Element => {
	return (
		<>
			{products && products.length}
		</>
	);
		
};