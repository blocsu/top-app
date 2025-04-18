import { JSX } from 'react';
import style from './Htag.module.css';
import { HtagProps } from './Htag.props';

export const Htag = ({tag, children}: HtagProps): JSX.Element => {
	switch (tag) {
		case 'h1': 
			return <h1 className={style.h1}>{children}</h1>;
		case 'h2': 
			return <h2 className={style.h2}>{children}</h2>;
		case 'h3': 
			return <h3 className={style.h3}>{children}</h3>;
		default:
			return <></>;
	}
	// return (<>
	// {tag == 'h1' && <h1>{children}</h1>}
	// {tag == 'h2' && <h2>{children}</h2>}
	// </>);
};