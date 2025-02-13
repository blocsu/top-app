import { Button, Htag, P } from '@/components';
import { JSX } from 'react';

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export default function Home(): JSX.Element {
  return (
      <>
        <Htag tag='h1'>Text</Htag>
				<Button appearance='primary' arrow='right' className='asasas'>Узнать подробнее</Button>
				<Button appearance='ghost' arrow='down'>Читать отзывы</Button>
				<P size='l'>Большой</P>
				<P>Средний</P>
				<P size='s'>Маленький</P>
      </>
    
  );
}
