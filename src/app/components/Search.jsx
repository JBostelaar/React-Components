import React from 'react';
import classNames from 'classnames';

export default class Search extends React.Component {
	constructor() {
		super();

		this.state = {
			value: '',
			filteredData: null,
			openResults: false,
		};

		this.handleChange = this.handleChange.bind(this);
		this.setValue = this.setValue.bind(this);
	}

	setValue(value) {
		this.setState({ value, openResults: false });
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({ value });

		if (!value) return;

		let filteredData = this.props.data.filter(name => (
			name.toLowerCase().indexOf(value.toLowerCase()) === 0
		));

		if (filteredData.length > 5) {
			filteredData = filteredData.splice(0, 5);
		}

		this.setState({ filteredData, openResults: true });
	}

	render() {
		const classes = classNames('input-field', 'input-field--search', {
			'has-results': this.state.value,
		});

		return (
			<div className={classes}>
				<input
					id="search"
					type="text"
					className="input-search"
					value={this.state.value}
					onChange={this.handleChange}
					placeholder="Search"
				/>
				{this.state.value ? (
					<i className="material-icons input-search__clear" onClick={() => this.setValue('')}>
						&#xE5C9;
					</i>
				) : ''}
				{this.state.value && this.state.openResults ? (
					<div className="input-search__results">
						{this.state.filteredData.length ? (
							<ul>
								{this.state.filteredData.map((name, index) => (
									<li key={index} onClick={() => this.setValue(name)}>
										{name}
									</li>
								))}
							</ul>
						) : (
							<p>No results found for: {this.state.value}</p>
						)}
					</div>
				) : ''}
			</div>
		);
	}
}

Search.propTypes = {
	data: React.PropTypes.array,
};
