import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/style.scss';
import listFunction from './helpers/listFunction.js';

import 'highlight.js/scss/atom-one-dark.scss';
import hljs from 'highlight.js/lib/core';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);

import Toc from './components/Toc/Toc';
import Content from './components/Content/Content'


function App() {
	React.useEffect(() => {
		hljs.highlightAll();
	}, []);

	return (
		<div className="page">
			<header className="page__header header">
				<h1 className="header__title">Vanilla JavaScript vs <a href="https://underscorejs.org">Underscore.js</a> and <a href="https://lodash.com">Lodash.js</a></h1>
				<ul className="header__menu menu">
					<li className="menu__item"><a href="/" className="menu__link">Функции</a></li>
					<li className="menu__item"><a href="/testing" className="menu__link">Тесты</a></li>
				</ul>
			</header>
			<aside className="page__toc">
				{listFunction.map(category => {
					return (
						<Toc category={category} key={category.key} />
					)
				})}
			</aside>
			<main className="page__content content">
				{listFunction.map((category, index) => {
					return (
						<Content category={category} key={category.key} />
					)
				})}
			</main>
		</div>
	);
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);


