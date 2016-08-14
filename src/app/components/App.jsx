import React from 'react';
import AppNav from 'app/components/AppNav';
import TransitionGroup from 'react-addons-css-transition-group';

export default function App({ children, location }) {
	return (
		<main className="app">
			<AppNav />
			<div className="app__components">
				<TransitionGroup
					component="div" className="animation-container"
					transitionName="componentsTransition"
					transitionAppear transitionAppearTimeout={300}
					transitionEnterTimeout={300} transitionLeaveTimeout={300}
				>
					{React.cloneElement(children, {
						key: location.pathname,
					})}
				</TransitionGroup>
			</div>
		</main>
	);
}

App.propTypes = {
	children: React.PropTypes.object,
	location: React.PropTypes.object,
};
