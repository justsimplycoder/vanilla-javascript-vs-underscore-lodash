/**
 * Изменение url без перезагрузки и добавление истории перехода по функциям
 * @param {string} curLoc - название функции
 */
function setLocation(curLoc){
	try {
		history.pushState({name: curLoc}, '_.' + curLoc, '#fn-' + curLoc);
		return;
	} catch(e) {}
	location.hash = '#' + curLoc;
}

function MenuCategory(props) {
	function handleMoveFunction(name, e) {
		e.preventDefault();
		const scrollTarget = document.getElementById('fn-' + name);
		const topOffset = 92;
		const elementPosition = scrollTarget.getBoundingClientRect().top;
		const offsetPosition = elementPosition - topOffset;
		window.scrollBy({
			top: offsetPosition,
			behavior: 'smooth'
		});
		setLocation(name);
	}

	return (
		<ul className="menu">
			{props.category.content.map(item => {
				return (
					<li key={item.key}>
						<a href={'#' + item.name} onClick={(e) => {handleMoveFunction(item.name, e)}}>{'_.' + item.name}</a>
					</li>
				);
			})}
		</ul>
	);
}

function Menu() {
	return (
		<aside class="l-toc" id="toc">
			{listFunction.map(category => {
				return (
					<React.Fragment>
						<p>{category.title}</p>
						<MenuCategory category={category} />
					</React.Fragment>
				)
			})}
		</aside>
	)
}

function ContentCategory(props) {
	return (
		<React.Fragment>
			{props.category.content.map(item => {
				return (
					<section>
						<h3><a id={'fn-' + item.name}></a>{'_.' + item.name}</h3>
						<p>{item.description}</p>

						<h4>Lodash</h4>
						<pre><code class="language-js">
							{item.lodash ? item.lodash : `\nНет реализации.\n\n`}
						</code></pre>

						<h4>Underscore</h4>
						<pre><code class="language-js">
							{item.underscore ? item.underscore : `\nНет реализации.\n\n`}
						</code></pre>

						<h4>Vanilla JavaScript</h4>
						<pre><code class="language-js">
							{item.vanillaJavaScript}
						</code></pre>
					</section>
				);
			})}
		</React.Fragment>
	);
}

function Content() {
	React.useEffect(() => {
		hljs.highlightAll();
	}, []);

	return (
		<main class="l-content" id="content">
			{listFunction.map(category => {
				return (
					<React.Fragment>
						<h2>{category.title}</h2>
						<ContentCategory category={category} />
					</React.Fragment>
				)
			})}
		</main>
	);
}

function App() {
	return (
		<React.Fragment>
			<header class="l-header">
				<h1>Vanilla JavaScript vs <a href="https://underscorejs.org">Underscore.js</a> and <a href="https://lodash.com">Lodash.js</a></h1>
			</header>
			<Menu />
			<Content />
		</React.Fragment>
	);
}

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(<App />);


