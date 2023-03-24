function Menu() {
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
	}

	return (
		<ul className="menu">
			{MENU[0].content.map(item => {
				return (
					<li key={item.key}>
						<a href={'#' + item.name} onClick={(e) => {handleMoveFunction(item.name, e)}}>{'_.' + item.name}</a>
					</li>
				);
			})}
		</ul>
	)
}

const toc = ReactDOM.createRoot(document.getElementById('toc'));
toc.render(<Menu />);

hljs.highlightAll();

