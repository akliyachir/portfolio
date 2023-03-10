import './ContactSection.css';
import ContactInformations from '../../ListsAndFixedContent/ContactInformations';
import { WindowWidthContext } from '../../contexts/WindowWidth';
import { useContext } from 'react';
import { FaLinkedin, FaGithub, FaLink } from 'react-icons/fa';

export default function ContactSection() {
	const pageWidth = useContext(WindowWidthContext);
	const {
		contact_id,
		contact_full_name,
		contact_phone_number,
		contact_wasap,
		contact_adress,
		contact_email,
	} = ContactInformations;
	return (
		<div className='ContactSection' id='contact'>
			<div className='contactSectionTitle'>Contact</div>
			<div className='firstContactSection'>
				<div className='contactContentContainerOfEveryThing'>
					<div
						key={contact_id}
						className={
							pageWidth > 470 ? 'ContactSectionContent' : 'SmallContactSectionContent'
						}
					>
						<span className='ContactElementName'>Name</span>
						<span>{contact_full_name} </span>
						<span className='ContactElementName'>Email</span>
						<span className='ContactElementInfo'>{contact_email} </span>
						<span className='ContactElementName'>Phone</span>
						<span className='ContactElementInfo'>{contact_phone_number} </span>
						<span className='ContactElementName'>WhatsApp</span>
						<span className='ContactElementInfo'>{contact_wasap} </span>
						<span className='ContactElementName'>Adress</span>
						<span className='ContactElementInfo'>{contact_adress} </span>
					</div>{' '}
				</div>{' '}
			</div>
			<div className='secondContactSection'>
				<div className='contactContentContainerOfEveryThing'>
					<div className='ContactClickableLogos'>
						<a
							href='http://www.linkedin.com/in/akli-yachir-92b072234'
							target='_blank'
							rel='noopener noreferrer'
						>
							{' '}
							<FaLinkedin />
						</a>
						<a
							href='http://github.com/akliyachir'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaGithub />
						</a>
						<a
							href='http://akli-yachir.netlify.com'
							target='_blank'
							rel='noopener noreferrer'
						>
							<FaLink />
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
