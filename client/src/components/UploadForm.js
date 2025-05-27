import React, { useState } from 'react';
import { toast } from 'react-toastify';

const UploadForm = () => {
	const [file, setFile] = useState(null);
	const [fileName, setFileName] = useState('이미지 파일을 업로드 해주세요.');

	const imageSelectHandler = (event) => {
		const imageFile = event.target.files[0];
		setFile(imageFile);
		setFileName(imageFile.name);
	};

	const onSubmit = async (event) => {
		event.preventDefault();
		if (!file) {
			alert('파일을 선택해주세요.');
			return;
		}

		const formData = new FormData();
		formData.append('image', file);

		try {
			const response = await fetch('http://localhost:5000/upload', {
				method: 'POST',
				body: formData,
			});

			if (!response.ok) {
				throw new Error('파일 업로드 실패');
			}

			const data = await response.json();
			console.log(data);
			toast.success(`파일 업로드 성공: ${data.filename}`);
			setFile(null); // 파일 상태 초기화
			setFileName('이미지 파일을 업로드 해주세요.'); // 파일 이름 초기화
		} catch (error) {
			toast.error(`오류 발생: ${error.message}`);
		}
	};

	return (
		<form onSubmit={onSubmit}>
			<label htmlFor='image'>{fileName}</label>
			<input id='image' type='file' onChange={imageSelectHandler} />
			<button type='submit'>제출</button>
		</form>
	);
};

export default UploadForm;
