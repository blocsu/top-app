import { HhData, Htag, Tag } from '@/components';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { JSX } from 'react';
import styles from './TopPageComponent.module.css';
import { TopPageComponentsProps } from './TopPageComponent.props';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentsProps): JSX.Element => {
	return (
		<div className={styles.wrapper}>
			<div  className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m'>{products.length}</Tag>}
				<span>Сортировка</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			<div  className={styles.hhTitle}>
				<Htag tag='h2'>{page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && <HhData {...page.hh} />}
		</div>
	);
		
};