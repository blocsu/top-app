import cn from 'classnames';
import { useRouter } from 'next/router';
import { JSX, useState } from 'react';
import { Button } from '../Button/Button';
import { Input } from '../Input/Input';
import styles from './Search.module.css';
import { SearchProps } from './Search.props';
import GlassIcon from './glass.svg';


export const Search = ({className, ...props}: SearchProps): JSX.Element => {
	const router = useRouter();

	const goToSearch = () => {
		router.push({
			pathname: '/search',
			query: {
				q: search
			}
		})
	};

	const handleKeyDown = (e: KeyboardEvent) => {
		if(e.key == 'Enter') {
			goToSearch();
		}
	}

	const [search, setSearch] = useState<string>('');
	return (
		<form className={cn(className, styles.search)} {...props} role="search">
			<Input
				className={styles.input}
				placeholder="Поиск..."
				value={search}
				onChange={(e) => setSearch(e.target.value)}
				onKeyDown={handleKeyDown}
			/>
			<Button
				appearance="primary"
				className={styles.button}
				onClick={goToSearch}
				aria-label="Искать по сайту"
			>
				<GlassIcon />
			</Button>
		</form>
	);
};