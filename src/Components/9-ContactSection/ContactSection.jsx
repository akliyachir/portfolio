import './ContactSection.css';
import ContactInformations from '../../ListsAndFixedContent/ContactInformations';

export default function ContactSection() {
	const { contact_id } = ContactInformations;
	return (
		<div className='ContactSection' id='contact'>
			<div className='contactSectionTitle'>Contact</div>
			<div key={contact_id} className='ContactSectionContent'>
				<div>{contact_id}</div>
			</div>
		</div>
	);
}
