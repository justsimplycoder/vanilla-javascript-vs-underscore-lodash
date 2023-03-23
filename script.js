function Menu() {
	React.useEffect(() => {
		document.querySelectorAll('a[href^="#"').forEach(link => {
			link.addEventListener('click', function(e) {
				e.preventDefault();
				let href = this.getAttribute('href').substring(1);
				const scrollTarget = document.getElementById('fn-' + href);
				const topOffset = 92; // если не нужен отступ сверху
				const elementPosition = scrollTarget.getBoundingClientRect().top;
				const offsetPosition = elementPosition - topOffset;
				window.scrollBy({
						top: offsetPosition,
						behavior: 'smooth'
				});
			});
		});
	});

	return (
		<ul className="menu">
			{MENU[0].content.map(item => {
				return <li key={item.key}><a href={'#' + item.name}>{'_.' + item.name}</a></li>
			})}
		</ul>
	)
}

const toc = ReactDOM.createRoot(document.getElementById('toc'));
toc.render(<Menu />);

hljs.highlightAll();

