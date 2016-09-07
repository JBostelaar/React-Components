import React from 'react';
import NotificationSystem from 'react-notification-system';

export default class Notifications extends React.Component {
	constructor() {
		super();

		this.addNotification = this.addNotification.bind(this);
	}

	componentDidMount() {
		this.notificationSystem = this.refs.notificationSystem;
	}

	addNotification(e) {
		e.preventDefault();
		const type = e.target.dataset.type;
		this.notificationSystem.addNotification({
			message: 'Notification message',
			level: type,
			position: 'tr',
		});
	}

	render() {
		return (
			<div className="notifications">
				<button onClick={this.addNotification} data-type="success">Success</button>
				<button onClick={this.addNotification} data-type="error">Error</button>
				<NotificationSystem ref="notificationSystem" />
			</div>
		);
	}
}
