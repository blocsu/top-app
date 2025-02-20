import { default as classNames, default as cn } from 'classnames';
import { FunctionComponent, JSX } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import styles from './Layout.module.css';
import { LayoutProps } from './Layout.props';
import { Sidebar } from './Sidebar/Sidebar';


const Layout = ({children}: LayoutProps): JSX.Element => {
	return (
		<>
			<Header />
			<div>
				<Sidebar />
				<div className={cn(styles.layout, classNames)}
				>
					{children}
				</div>
			</div>
			<Footer />
		</>	
	);	
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
	return function WithLayoutComponent (props: T): JSX.Element {
		return (
			<Layout>
				<Component {...props} />
			</Layout>
		)
	};
};