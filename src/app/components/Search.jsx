import React from 'react';
import classNames from 'classnames';

export default class Search extends React.Component {
	constructor() {
		super();

		this.state = { value: '', filteredData: null };
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(e) {
		const value = e.target.value;
		this.setState({ value });

		if (!value) return;
		let filteredData = this.props.data.filter(name => (
			name.toLowerCase().indexOf(value.toLowerCase()) !== -1
		));

		if (filteredData.length > 10) {
			filteredData = filteredData.splice(0, 10);
		}
		this.setState({ filteredData });
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
					<div className="input-search__results">
						{this.state.filteredData.length ? (
							<ul>
								{this.state.filteredData.map((name, index) => (
									<li key={index}>{name}</li>
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
