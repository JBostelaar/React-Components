import React from 'react';
import classNames from 'classnames';

export default class InputPassword extends React.Component {
	constructor() {
		super();

		this.state = {
			showPassword: false,
			value: '',
			error: false,
		};

		this.toggleShowPassword = this.toggleShowPassword.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		this.setState({ value: e.target.value });

		if (this.state.error) this.setState({ error: false });
	}

	toggleShowPassword() {
		this.setState({ showPassword: !this.state.showPassword });
	}

	validate() {
		if (this.state.value.length < 6) {
			this.setState({ error: true });
			return false;
		}

		this.setState({ error: false });
		return true;
	}

	render() {
		const { value, label, name } = this.props;
		const classes = classNames('input-field', 'input-field--password', {
			error: this.state.error,
		});

		return (
			<div className={classes}>
				{label ? (
					<label htmlFor={name}>{label}</label>
				) : ''}
				{this.state.showPassword ? (
					<input type="text" id={name} name="password" value={value} onChange={this.handleChange} />
				) : (
					<input type="password" id={name} name="password" value={value} onChange={this.handleChange} />
				)}
				<a className="input-field__toggle" onClick={this.toggleShowPassword}>show password</a>
			</div>
		);
	}
}

InputPassword.propTypes = {
	label: React.PropTypes.string,
	name: React.PropTypes.string,
	value: React.PropTypes.string,
};
