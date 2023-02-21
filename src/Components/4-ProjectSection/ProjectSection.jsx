import './ProjectSection.css';
import ProjectCard from '../5-ProjectCard/ProjectCard';
import projectsContent from '../../ListsAndFixedContent/projectsContent';

export default function ProjectSection() {
	return (
		<div className='ProjectSection' id='projects'>
			{projectsContent.map((item) => {
				const {
					id,
					project_name,
					project_description,
					project_image_preview,
					project_link,
					project_github_repository,
					project_tech,
				} = item;
				return (
					<ProjectCard
						key={id}
						project_name={project_name}
						project_description={project_description}
						project_image_preview={project_image_preview}
						project_link={project_link}
						project_github_repository={project_github_repository}
						project_tech={project_tech}
					/>
				);
			})}
		</div>
	);
}
