import './CurriculumSection.css';
import '/akli_yachir_cv.pdf';

/*
 '/publicakli_yachir_cv.pdf'
 */

import { AiOutlineFilePdf } from 'react-icons/ai';

export default function CurriculumSection() {
	const handleOnClickCurriculum = () => {
		globalThis.open('/akli_yachir_cv.pdf');
	};
	return (
		<div className='CurriculumSection' id='curriculum'>
			<div className='curriculumContentContainer'>
				<div className='curriculumTitle'>My Curriculum</div>
				<div className='curriculumIconContainer' onClick={handleOnClickCurriculum}>
					<AiOutlineFilePdf />
				</div>
			</div>
		</div>
	);
}
