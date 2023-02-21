import './AboutMeSection.css';
import aboutMeSectionContent from '../../ListsAndFixedContent/aboutMeSectionContent';
import '../../img/akli-pic.jpg';
const profilePicture = '/akli-pic.jpg';

export default function AboutMeSection() {
	return (
		<div className='AboutMeSection' id='about_me'>
			<div className='AboutMeSectionContent'>
				<div className='AboutMeSectionContentContainer'>
					<div className='titleAndProfilePicture'>
						<div className='title'>{aboutMeSectionContent.title}</div>
						<div className='profilePicture' />
					</div>
					<p className='presentation'>{aboutMeSectionContent.presentation}</p>
				</div>
			</div>
		</div>
	);
}
