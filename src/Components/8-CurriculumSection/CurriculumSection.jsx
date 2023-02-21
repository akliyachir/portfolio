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
	return (
		<div className='CurriculumSection' id='curriculum'>
			<div className='curriculumTitle'>My Curriculum Vitae</div>
			<div className='curriculumIconContainer'>
				<AiOutlineFilePdf />
			</div>
		</div>
	);
}
