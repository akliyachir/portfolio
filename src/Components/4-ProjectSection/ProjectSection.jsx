import './ProjectSection.css';
import ProjectCard from '../5-ProjectCard/ProjectCard';
import projectsContent from '../../ListsAndFixedContent/projectsContent';

export default function ProjectSection() {
	return (
		<div className='ProjectSection'>
			{projectsContent.map((item) => {
				const {
					id,
					project_name,
					project_technologies,
					project_description,
					project_image_preview,
				} = item;
				return (
					<ProjectCard
						key={id}
						project_name={project_name}
						project_technologies={project_technologies}
						project_description={project_description}
						project_image_preview={project_image_preview}
					/>
				);
			})}
		</div>
	);
}
