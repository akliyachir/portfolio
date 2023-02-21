import './FooterRoot.css';
import { FaCopyright } from 'react-icons/fa';

export default function FooterRoot() {
	return (
		<div className='FooterRoot'>
			<div className='FooterNameCopyright'>
				<span>Akli Yachir</span>
				<span>
					<FaCopyright />
				</span>
				<span>2023</span>
			</div>
		</div>
	);
}
