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
			],
		},
	];
}
