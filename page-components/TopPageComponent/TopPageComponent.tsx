import { Advantages, HhData, Htag, Product, Sort, Tag } from '@/components';
import { SortEnum } from '@/components/Sort/Sort.props';
import { TopLevelCategory } from '@/interfaces/page.interface';
import { useReducedMotion } from 'framer-motion';
import { JSX, useEffect, useReducer } from 'react';
import styles from './TopPageComponent.module.css';
import { TopPageComponentsProps } from './TopPageComponent.props';
import { sortReducer } from './sort.reducer';

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentsProps): JSX.Element => {
	const [{ products: sortedProducts, sort }, dispathSort] = useReducer(sortReducer, { products, sort: SortEnum.Rating });
	const shouldReduceMotion = useReducedMotion();
	
	const setSort = (sort: SortEnum) => {
		dispathSort({type: sort});
	};

	useEffect(() => {
		dispathSort({ type: 'reset', initialState: products })
	}, [products]);

	return (
		<div className={styles.wrapper}>
			<div  className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='m' aria-label={products.length + "элементов"}>{products.length}</Tag>}
				<Sort sort={sort} setSort={setSort} />
			</div>
			<div role='list'>
				{sortedProducts && sortedProducts.map(p => (<Product role='listitem' layout={shouldReduceMotion ? false : true} key={p._id} product={p} />))}
			</div>
			<div  className={styles.hhTitle}>
				<Htag tag='h2'>Вакансии - {page.category}</Htag>
				<Tag color='red' size='m'>hh.ru</Tag>
			</div>
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh} />}
			{page.advantages && page.advantages.length > 0 && <>
				<Htag tag='h2'>Преимущества</Htag>
				<Advantages advantages={page.advantages} />
			</> 
			}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{__html: page.seoText}} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag key={t} color='primary'>{t}</Tag>)}
		</div>
	);
		
};