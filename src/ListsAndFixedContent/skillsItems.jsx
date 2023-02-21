import { FaJs, FaCss3 } from 'react-icons/fa';
import {} from 'react-icons/all';
import {
	RiReactjsFill,
	RiNpmjsFill,
	RiGithubFill,
	RiHtml5Fill,
} from 'react-icons/ri';

const skillsItems = [
	{
		skill_id: 1,
		skill_name: 'React',
		skill_logo: <RiReactjsFill />,
	},
	{
		skill_id: 2,
		skill_name: 'Express',
		skill_logo: '',
	},
	{
		skill_id: 3,
		skill_name: 'Mongodb',
		skill_logo: '',
	},
	{
		skill_id: 4,
		skill_name: 'PostgreSql',
		skill_logo: '',
	},

	{
		skill_id: 5,
		skill_name: 'NPM',
		skill_logo: <RiNpmjsFill />,
	},
	{
		skill_id: 6,
		skill_name: 'git | github',
		skill_logo: <RiGithubFill />,
	},
	{
		skill_id: 7,
		skill_name: 'Javascript',
		skill_logo: <FaJs />,
	},
	{
		skill_id: 8,
		skill_name: 'CSS',
		skill_logo: <FaCss3 />,
	},
	{
		skill_id: 9,
		skill_name: 'HTML',
		skill_logo: <RiHtml5Fill />,
	},
];

export default skillsItems;
