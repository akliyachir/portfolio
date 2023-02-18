import './ProjectCard.css';

export default function ProjectCard({
	project_name,
	project_technologies,
	project_description,
	project_image_preview,
}) {
	return (
		<div className='ProjectCardContainer'>
			<div
				className='project_image_preview'
				style={{ backgroundImage: `url(${project_image_preview})` }}
			></div>
		</div>
	);
}
