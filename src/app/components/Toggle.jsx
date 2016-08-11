import React from 'react';
import classNames from 'classnames';

export default class Toggle extends React.Component {
	constructor() {
		super();

		this.state = { value: false };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange() {
		this.setState({ value: !this.state.value });
	}

	render() {
		const classes = classNames('toggle', {
			'toggle--active': this.state.value,
		});

		return (
			<div className={classes} onClick={this.handleChange}></div>
		);
	}
}
