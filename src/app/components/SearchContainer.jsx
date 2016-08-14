import React from 'react';
import Search from 'app/components/Search';
import randomNames from 'app/utils/randomNames';

export default function SearchContainer() {
	const names = randomNames();
	return (
		<div className="search__container">
			<Search data={names} />
		</div>
	);
}
