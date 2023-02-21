import './AboutMeSection.css';
import aboutMeSectionContent from '../../ListsAndFixedContent/aboutMeSectionContent';

export default function AboutMeSection() {
	return (
		<div className='AboutMeSection' id='about_me'>
			<div className='AboutMeSectionContent'>
				<div className='title'>{aboutMeSectionContent.title}</div>
				<p className='selfPresentation'>{aboutMeSectionContent.presentaion}</p>
			</div>
		</div>
	);
}
