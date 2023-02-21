import './ContactSection.css';
import ContactInformations from '../../ListsAndFixedContent/ContactInformations';

export default function ContactSection() {
	const { contact_id, contact_full_name, contact_phone_number } =
		ContactInformations;
	return (
		<div className='ContactSection' id='contact'>
			<div className='contactSectionTitle'>Contact</div>
			<div key={contact_id} className='ContactSectionContent'>
				<div className='contactElementContainer'>
					<span className='ContactElementName'>Name :</span>
					<span>{contact_full_name} </span>
				</div>
				<div className='contactElementContainer'>
					<span className='ContactElementName'>Phone :</span>
					<span className='ContactElementInfo'>{contact_phone_number} </span>
				</div>
			</div>
		</div>
	);
}
