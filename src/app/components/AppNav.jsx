import React from 'react';
import { Link } from 'react-router';

export default class App extends React.Component {
	constructor() {
		super();

		this.state = {
			pages: [
				{
					label: 'Login',
					path: '/login',
				},
				{
					label: 'Input Password',
					path: '/password',
				},
				{
					label: 'Input',
					path: '/input',
				},
			],
		};
	}

	render() {
		return (
			<nav className="app-nav">
				<h1 className="app-nav__title">Components ({this.state.pages.length})</h1>
				<ul>
					{this.state.pages.map((page, index) => (
						<li key={index} className="app-nav__item">
							<Link to={page.path} activeClassName="active">{page.label}</Link>
						</li>
					))}
				</ul>
			</nav>
		);
	}
}
