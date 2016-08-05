import React from 'react';
import classNames from 'classnames';

export default class Tooltip extends React.Component {
	constructor() {
		super();

		this.state = {
			open: false,
		};

		this.toggleTooltip = this.toggleTooltip.bind(this);
		this.onClose = this.onClose.bind(this);
		this.onOpen = this.onOpen.bind(this);
	}

	onOpen() {
		this.setState({ open: true });
		document.addEventListener('click', this.onClose);
	}

	onClose() {
		this.setState({ open: false });
		document.removeEventListener('click', this.onClose);
	}

	toggleTooltip() {
		if (this.state.open) {
			this.onClose();
		} else {
			this.onOpen();
		}
	}

	render() {
		const text = this.props.text || 'Add some text';
		const classes = classNames('tooltip', {
			'tooltip--open': this.state.open,
			'tooltip--hover': this.props.hover,
		});

		return (
			<div className={classes}>
				<i className="tooltip__toggle material-icons" onClick={this.toggleTooltip}>&#xE88E;</i>
				{this.state.open || this.props.hover ? (
					<div className="tooltip__content">
						{text}
					</div>
				) : ''}
			</div>
		);
	}
}

Tooltip.propTypes = {
	text: React.PropTypes.string,
	hover: React.PropTypes.bool,
};
