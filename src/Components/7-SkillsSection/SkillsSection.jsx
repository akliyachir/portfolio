import './SkillsSection.css';
import skillsItems from '../../ListsAndFixedContent/skillsItems';

export default function SkillsSection() {
	return (
		<div className='skillSectionContainer'>
			<div className='skillsSectionTitle'>skills</div>
			<div className='SkillsSection' id='skills'>
				{skillsItems.map((skillsItemsLoop) => {
					const { skill_id, skill_name, skill_logo } = skillsItemsLoop;
					console.log(skill_logo);
					return (
						<div key={skill_id} className='skillsItemsLoop'>
							<div className='skill_logo'>{skill_logo}</div>
							<div>{skill_name}</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
