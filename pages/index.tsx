import { Button, Htag, Input, P, Rating, Tag, Textarea } from '@/components';
import { API } from '@/helpers/api';
import { MenuItem } from '@/interfaces/menu.interface';
import { withLayout } from '@/layout/Layout';
import axios from 'axios';
import { GetStaticProps } from 'next';
import { JSX, useEffect, useState } from 'react';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

function Home({menu}: HomeProps): JSX.Element {	
	const [rating, setRating] = useState<number>(4);

	useEffect(() => {		
		return function cleanup() {
			console.log('Unmount');
			console.log(menu);	
		};		
	});
	
  return (
      <>
        <Htag tag='h1'>Заголовок</Htag>
				<Button appearance='primary' arrow='right'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow='down'>Читать отзывы</Button>
				<P size='l'>Большой</P>
				<P>Средний</P>
				<P size='s'>Маленький</P>
				<Tag size='s'>Ghost</Tag>
				<Tag size='m' color='red'>Red</Tag>
				<Tag size='s' color='green'>Green</Tag>
				<Tag color='grey'>Grey</Tag>
				<Tag color='primary'>Primary</Tag>
				<Rating rating={rating} isEditable setRating={setRating} />
				<Input placeholder='тест' />
				<Textarea placeholder='тест area' />
      </>    
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(API.topPage.find, {
		firstCategory
	});
	return {
		props: {
			menu,
			firstCategory
		}
	};
};

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[];
	firstCategory: number;
}
