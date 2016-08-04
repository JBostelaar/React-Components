import React from 'react';
import Tooltip from 'app/components/Tooltip';

export default function TooltipContainer() {
	return (
		<div className="tooltip__container">
			<div>
				<h5>on Click</h5>
				<Tooltip />
			</div>
			<div>
				<h5>on Hover</h5>
				<Tooltip text="Tooltip on Hover" hover />
			</div>
		</div>
	);
}
