import './HeaderMenuItem.css';

export default function HeaderMenuItem({
	name,
	link,
	handleSideMenuToggleCloseOnly,
}) {
	return (
		<div className='HeaderMenuItem'>
			<a href={`#${link}`} onClick={handleSideMenuToggleCloseOnly}>
				{name}
			</a>
		</div>
	);
}
