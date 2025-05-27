import UploadForm from './components/UploadForm';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
	return (
		<div>
			<h2>사진첩</h2>
			<UploadForm />
			<ToastContainer />
		</div>
	);
};

export default App;
