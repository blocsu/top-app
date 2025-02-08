import { Button, Htag } from '@/components';
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
				<Button appearance='primary'>Кнопка</Button>
				<Button appearance='ghost'>Кнопка</Button>
      </>
    
  );
}
