import React from 'react';
import InputPassword from 'app/components/InputPassword';
import Input from 'app/components/Input';

export default class Login extends React.Component {
	constructor() {
		super();

		this.state = {
			fields: ['email', 'password'],
		};

		this.submitForm = this.submitForm.bind(this);
	}

	submitForm(e) {
		e.preventDefault();

		let isValid = true;
		this.state.fields.forEach(ref => {
			isValid = this.refs[ref].validate() && isValid;
		});

		if (isValid) {
			alert('Logged in!');
		}
	}

	render() {
		return (
			<div className="login">
				<form className="login__form" onSubmit={this.submitForm}>
					<Input
						ref="email" name="email" type="text"
						label="E-mail" validator={v => v.match(/(.+)@(.+){2,}\.(.+){2,}/)}
					/>
					<InputPassword ref="password" name="password" label="Password" />
					<button type="submit" className="login__submit">Login</button>
				</form>
			</div>
		);
	}
}
