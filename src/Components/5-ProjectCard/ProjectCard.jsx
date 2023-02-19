import './ProjectCard.css';
import { FaExternalLinkAlt, FaGit, FaGithub, FaLink } from 'react-icons/fa';
import { HiOutlineExternalLink } from 'react-icons/hi';

export default function ProjectCard({
	id,
	project_name,
	project_description,
	project_image_preview,
	project_link,
	project_github_repository,
	project_tech,
}) {
	return (
		<div className='ProjectCardContainer'>
			<div className='ImageHalfProjectCard'>
				<a
					style={{ backgroundImage: `url(${project_image_preview})` }}
					href={project_link}
					target='_blank'
					rel='noopener noreferrer'
					className='project_image_preview'
				/>
			</div>
			<div className='detailledDescriptionHalfProjectCard'>
				<div className='project_name'>{project_name}</div>
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
		</div>
	);
}
