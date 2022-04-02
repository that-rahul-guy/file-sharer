import React, {useState} from 'react';

function Upload() {
	const [selectedFile, setSelectedFile] = useState();
	const [isFilePicked, setIsFilePicked] = useState(false);
	const [downloadLink, setDownloadLink] = useState('');

	const changeHandler = (event) => {
		setSelectedFile(event.target.files[0]);
		setIsFilePicked(true);
	};

	const handleSubmission = () => {
		const formData = new FormData();

		formData.append('file', selectedFile);

		fetch(
			'/uploadFile',
			{
				method: 'POST',
				body: formData,
			}
		)
			.then((response) => response.json())
			.then((result) => {
				setDownloadLink(result['downloadLink']);
				console.log('Success:', result);
			})
			.catch((error) => {
				console.error('Error:', error);
			});
	}

	return(
        <div>
			<input type="file" name="file" onChange={changeHandler} />
			{isFilePicked ? (
				<div>
					<p>Filename: {selectedFile.name}</p>
					<p>Filetype: {selectedFile.type}</p>
					<p>Size in bytes: {selectedFile.size}</p>
					<p>
						lastModifiedDate:{' '}
						{selectedFile.lastModifiedDate.toLocaleDateString()}
					</p>
				</div>
			) : (
				<p>Select a file to show details</p>
			)}
			<div>
				<button onClick={handleSubmission}>Submit</button>
			</div>

			<div>
				{downloadLink ? (
				<textarea value={downloadLink} readOnly>
				</textarea>
				): null				
				}
			</div>
		</div>
	)
}

export default Upload;