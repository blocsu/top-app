import { Button, Htag, P, Tag } from '@/components';
import { JSX, useState } from 'react';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home(): JSX.Element {
	const [counter, setCounter] = useState<number>(0);
  return (
      <>
        <Htag tag='h1'>{counter}</Htag>
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
      </>
    
  );
}
