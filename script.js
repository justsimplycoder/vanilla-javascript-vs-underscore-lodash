function Menu() {
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