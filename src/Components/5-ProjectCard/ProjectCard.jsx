import './ProjectCard.css';

export default function ProjectCard({
	project_name,
	project_technologies,
	project_description,
	project_image_preview,
}) {
	return (
		<div className='ProjectCardContainer'>
			<div className='firstHalfProjectCard'>
				<img src={project_image_preview} className='project_image_preview' alt='' />
			</div>
			<div className='secondHalfProjectCard'>
				<h3>{project_name}</h3>
				<p>{project_description}</p>
			</div>
		</div>
	);
}