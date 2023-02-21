import './SkillsSection.css';
import skillsItems from '../../ListsAndFixedContent/skillsItems';
import { FaReacteurope } from 'react-icons/fa';
import { RiReactjsFill } from 'react-icons/ri';

export default function SkillsSection() {
	return (
		<div className='SkillsSection' id='skills'>
			{skillsItems.map((skillsItemsLoop) => {
				const { skill_id, skill_name, skill_logo } = skillsItemsLoop;
				console.log(skill_logo);
				return (
					<div key={skill_id}>
						<div>{skill_name}</div>
						<div className='skill_logo'>{skill_logo}</div>
					</div>
				);
			})}
			<div></div>
		</div>
	);
}
