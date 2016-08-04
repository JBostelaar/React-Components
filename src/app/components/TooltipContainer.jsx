import React from 'react';
import Tooltip from 'app/components/Tooltip';

export default function TooltipContainer() {
	return (
		<div className="tooltip__container">
			<Tooltip />
			<Tooltip text="Tooltip on Hover" hover />
		</div>
	);
}
