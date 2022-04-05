import React, {useState} from 'react';
import copy from 'copy-to-clipboard';
import { MdContentCopy } from 'react-icons/md';
import axios from 'axios';
import './upload.css';

function Upload() {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [downloadLink, setDownloadLink] = useState('');
	const [isCopied, setIsCopied] = useState(false);

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};


	const handleSubmission = () => {
		const formData = new FormData();
		formData.append('file', selectedFile);
		axios.post('/uploadFile', formData).then(res => {
			console.log(res);
			setDownloadLink(res.data['downloadLink']);
		});
	}

	const handleCopy = () => {
		copy(downloadLink);
		setIsCopied(true);
	}

	return(
        <div>
			
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
					<p>
						Share the following code with your friends:
					</p>
				</div>
			) : (
				<div>
				<input type="file" name="file" onChange={changeHandler} />
				<p>Select a file to show details</p>
				</div>
			)}

			{isFilePicked && !downloadLink ? (
				<div>
					<button onClick={handleSubmission}>Submit</button>
				</div>
			) : null
			}
			
			{downloadLink ? (
				<div className='copy-text'>
							<textarea
							className='show-text'
							value={
								isCopied ? 'Code Copied to Clipboard!' : downloadLink
							}
							readOnly
							>
							</textarea>
							
							<MdContentCopy
							size={25}
							className='copy-icon'
							onClick={handleCopy}
							>
							</MdContentCopy>
				</div>
				): null
			}
			
		</div>
	)
}

export default Upload;