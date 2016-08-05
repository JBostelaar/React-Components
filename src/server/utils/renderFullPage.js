import pkg from '../../../package.json';

export default function renderFullPage(html) {
	return (
	`<!doctype html>
	<html>
		<head>
			<meta charset="utf-8">
			<title>React Components</title>
			<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
			<link rel="stylesheet" href="/style.css?v=${pkg.version}">
		</head>
		<body>
			<div id="app">${html}</div>
			<script src="/bundle.js?v=${pkg.version}"></script>
		</body>
	</html>`
	);
}
