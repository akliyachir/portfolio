import {
	DiMongodb,
	DiPostgresql,
	DiNodejs,
	DiReact,
	DiNpm,
	DiCss3,
	DiHtml5,
	DiJavascript1,
	DiGit,
} from 'react-icons/di';

const skillsItems = [
	{
		skill_id: 1,
		skill_name: 'React',
		skill_logo: <DiReact />,
	},
	{
		skill_id: 2,
		skill_name: 'Express ',
		skill_logo: <DiNodejs />,
	},
	{
		skill_id: 3,
		skill_name: 'Mongodb',
		skill_logo: <DiMongodb />,
	},
	{
		skill_id: 4,
		skill_name: 'PostgreSql',
		skill_logo: <DiPostgresql />,
	},

	{
		skill_id: 5,
		skill_name: 'NPM',
		skill_logo: <DiNpm />,
	},
	{
		skill_id: 6,
		skill_name: 'git | github',
		skill_logo: <DiGit />,
	},
	{
		skill_id: 7,
		skill_name: 'Javascript',
		skill_logo: <DiJavascript1 />,
	},
	{
		skill_id: 8,
		skill_name: 'CSS',
		skill_logo: <DiCss3 />,
	},
	{
		skill_id: 9,
		skill_name: 'HTML',
		skill_logo: <DiHtml5 />,
	},
];

export default skillsItems;
