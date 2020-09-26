import './style.scss';
import React, { useMemo } from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from 'routes';

const View = () => {
	const navbarRoutes = useMemo(() => [
		{ name: 'Home', key: 'home' },
	], []);

	return (
		<div className={'navbar'}>
			<ul className={'navbar__list'}>
				{navbarRoutes.map((route) => (
					<li key={route.key} className={'navbar__item'}>
						<NavLink to={routes[route.key].link()} className={'navbar__link'}>{route.name}</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

export { View };
