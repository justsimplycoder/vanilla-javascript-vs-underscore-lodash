function Menu() {
	return (
		<ul>
			{MENU[0].content.map(item => {
				return <li key={item.key}><a href={item.href}>{item.name}</a></li>
			})}
		</ul>
	)
}

const toc = ReactDOM.createRoot(document.getElementById('toc'));
toc.render(<Menu />);
