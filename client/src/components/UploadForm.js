import React, { useState, useEffect } from 'react';

const UploadForm = () => {
	const [file, setFile] = useState(null);

	useEffect(() => {
		console.log('useEffect : ', { file });
	}, [file]);

	return (
		<form>
			<label htmlFor='image'>사진</label>
			<input
				id='image'
				type='file'
				onChange={(event) => {
					const imageFile = event.target.files[0];
					if (imageFile) {
						setFile(imageFile);
					} else {
						setFile(null);
					}
				}}
			/>
			<button type='submit'>제출</button>
		</form>
	);
};

export default UploadForm;
