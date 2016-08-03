import App from 'app/components/App';
import Login from 'app/components/Login';
import InputPassword from 'app/components/InputPassword';
import Input from 'app/components/Input';

export default function getRoutes() {
	return [
		{
			component: App,
			path: '/',
			indexRoute: { onEnter: (nextState, replace) => replace('/login') },
			childRoutes: [
				{
					path: '/login',
					component: Login,
				},
				{
					path: '/password',
					component: InputPassword,
				},
				{
					path: '/input',
					component: Input,
				},
			],
		},
	];
}
