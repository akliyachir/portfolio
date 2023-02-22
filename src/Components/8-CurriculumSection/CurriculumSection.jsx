import './CurriculumSection.css';

import {
	RxBookmarkFilled,
	RxDotFilled,
	RxFile,
	RxFileMinus,
	RxFilePlus,
	RxFileText,
	RxStarFilled,
} from 'react-icons/rx';

import {
	AiFillEdit,
	AiFillFileExcel,
	AiOutlineFilePdf,
	AiFillFileWord,
} from 'react-icons/ai';

export default function CurriculumSection() {
	const handleOnClickCurriculum = () => {
		console.log('cv');
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
