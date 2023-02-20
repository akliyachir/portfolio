import './ProjectCard.css';
import { FaExternalLinkAlt, FaGit, FaGithub, FaLink } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';
import { useState, useContext, useEffect, useReducer } from 'react';
import { WindowWidthContext } from '../../contexts/WindowWidth';

export default function ProjectCard({
	id,
	project_name,
	project_description,
	project_image_preview,
	project_link,
	project_github_repository,
	project_tech,
}) {
	const pageWidth = useContext(WindowWidthContext);

	const [isDescriptionExpanded, setisDescriptionExpanded] = useState(false);

	const [styleSwitchValue, setstyleSwitchValue] = useState(
		'SmallProjectCardContainer'
	);
	useEffect(() => {
		const stateSwitch = () => {
			if (pageWidth <= 320) {
				setstyleSwitchValue('SmallProjectCardContainer');
			} else if (pageWidth <= 500) {
				setstyleSwitchValue('medium');
			} else if (pageWidth <= 700) {
				setstyleSwitchValue('mediumLarge');
			} else if (pageWidth <= 900) {
				setstyleSwitchValue('large');
			}
		};
		stateSwitch();
	}, [pageWidth]);

	console.log(styleSwitchValue);
	console.log('hey');

	const HandleExpandeDescription = () => {
		setisDescriptionExpanded(!isDescriptionExpanded);
	};

	return (
		<div className={styleSwitchValue}>
			<div className='project_name'>{project_name}</div>
			<div className='ImageHalfProjectCard'>
				<a
					style={{ backgroundImage: `url(${project_image_preview})` }}
					href={project_link}
					target='_blank'
					rel='noopener noreferrer'
					className='project_image_preview'
				/>
			</div>
			{isDescriptionExpanded ? (
				<div className='detailledDescriptionHalfProjectCard'>
					<h3 className='project_description'>Description :</h3>
					<p className='project_description'>{project_description}</p>

					<div className='project_technologies_title'>{}</div>
					<div className='project_technologies'>
						{Object.keys(project_tech).map((project_tech_key) => {
							return (
								<div
									key={Object.keys(project_tech).indexOf(project_tech_key)}
									className='tech_container'
								>
									<span className='project_tech_key'>{project_tech_key} : </span>
									<span className='tech_names_container'>
										{project_tech[project_tech_key].map((backendItem) => {
											const { tech_id, tech_name } = backendItem;
											return (
												<span className='tech_name' key={tech_id}>
													{tech_name}
												</span>
											);
										})}
									</span>
								</div>
							);
						})}
					</div>
				</div>
			) : (
				<div
					className='expandeProjectDescriptin'
					onClick={HandleExpandeDescription}
				>
					{' '}
					Expande description!{' '}
				</div>
			)}
			<div className='project_links_container'>
				<a href={project_link} target='_blank' rel='noopener noreferrer'>
					<HiOutlineExternalLink />
				</a>
				<a
					href={project_github_repository}
					target='_blank'
					rel='noopener noreferrer'
				>
					<FaGithub />
				</a>
			</div>
		</div>
	);
}
