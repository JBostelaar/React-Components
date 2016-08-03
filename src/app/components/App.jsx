import React from 'react';
import AppNav from 'app/components/AppNav';

export default class App extends React.Component {
	render() {
		return (
			<main className="app">
				<AppNav />
				<div className="app__components">
					{this.props.children}
				</div>
			</main>
		);
	}
}

App.propTypes = {
	children: React.PropTypes.object,
};
