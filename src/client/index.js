import getRoutes from 'app/utils/getRoutes';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';

render((
	<Router children={getRoutes()} history={browserHistory} />
), document.getElementById('app'));
