import './ProjectCard.css';

export default function ProjectCard({
	id,
	project_name,
	project_technologies,
	project_description,
	project_image_preview,
	project_link,
	project_github_repository,
	project_tech,
	backend,
	frontend,
}) {
	return (
		<div className='ProjectCardContainer'>
			<div className='ImageHalfProjectCard'>
				<img src={project_image_preview} className='project_image_preview' alt='' />
			</div>
			<div className='secondHalfProjectCard'>
				<div>{project_name}</div>
				<p>{project_description}</p>
			</div>
		</div>
	);
}
