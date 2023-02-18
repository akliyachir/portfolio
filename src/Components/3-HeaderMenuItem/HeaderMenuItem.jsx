import './HeaderMenuItem.css';

export default function HeaderMenuItem({ name, link }) {
	return (
		<div className='HeaderMenuItem'>
			<a href={`#${link}`}>{name}</a>
		</div>
	);
}
