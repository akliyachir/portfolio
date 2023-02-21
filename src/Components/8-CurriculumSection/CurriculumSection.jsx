import './CurriculumSection.css';
import {
	FaFile,
	FaFileAlt,
	FaFileArchive,
	FaFileCode,
	FaFileContract,
	FaFileExcel,
	FaFileMedical,
} from 'react-icons/fa';

import { RxFile } from 'react-icons/rx';

export default function CurriculumSection() {
	return (
		<div className='CurriculumSection' id='curriculum'>
			<div className='curriculumIconContainer'>
				<RxFile />
			</div>
		</div>
	);
}
