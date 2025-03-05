import { Button, Htag, P, Rating, Tag } from '@/components';
import { MenuItem } from '@/interfaces/menu.interface';
import { withLayout } from '@/Layout/Layout';
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
	const [counter, setCounter] = useState<number>(0);
	const [rating, setRating] = useState<number>(4);

	useEffect(() => {
		console.log('Counter ' + counter);
		return function cleanup() {
			console.log('Unmount');
		};		
	})

	useEffect(() => {
		if (counter > 0) {	}
		console.log('Mounted ' + counter);		
	}, [])

  return (
      <>
        <Htag tag='h1'>Заголовок {counter}</Htag>
				<Button appearance='primary' arrow='right' onClick={() => setCounter(x => x + 1)}>Узнать подробнее</Button>
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
      </>    
  );
}

export default withLayout(Home);

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
	const firstCategory = 0;
	const {data: menu} = await axios.post<MenuItem[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
		firstCategory
	})
	return {
		props: {
			menu,
			firstCategory
		}
	}
}

interface HomeProps extends Record<string, unknown> {
	menu: MenuItem[],
	firstCategory: number
}
