import './ContactSection.css';
import ContactInformations from '../../ListsAndFixedContent/ContactInformations';

export default function ContactSection() {
	const { contact_id, contact_full_name } = ContactInformations;
	return (
		<div className='ContactSection' id='contact'>
			<div className='contactSectionTitle'>Contact</div>
			<div key={contact_id} className='ContactSectionContent'>
				<div>
					<span className='ContactElementName'>Name |</span>
					<span>{contact_full_name} </span>
				</div>
			</div>
		</div>
	);
}
