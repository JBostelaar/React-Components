import App from 'app/components/App';
import Login from 'app/components/Login';
import Input from 'app/components/Input';
import InputPassword from 'app/components/InputPassword';
import Toggle from 'app/components/Toggle';
import TooltipContainer from 'app/components/TooltipContainer';
import SearchContainer from 'app/components/SearchContainer';

export default function getRoutes() {
	return [
		{
			component: App,
			path: '/',
			indexRoute: { onEnter: (nextState, replace) => replace('/login') },
			childRoutes: [
				{
					path: '/login',
					label: 'Login',
					component: Login,
				},
				{
					path: '/password',
					label: 'Password',
					component: InputPassword,
				},
				{
					path: '/input',
					label: 'Input',
					component: Input,
				},
				{
					path: '/tooltip',
					label: 'Tooltip',
					component: TooltipContainer,
				},
				{
					path: '/search',
					label: 'Search',
					component: SearchContainer,
				},
				{
					path: '/toggle',
					label: 'Toggle',
					component: Toggle,
				}
			],
		},
	];
}
