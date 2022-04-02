import './App.css';
// import upload_img from './assets/upload.png';
import { FaFileUpload,FaFileDownload } from 'react-icons/fa';
import Upload from './components/upload/Upload';
import Download from './components/download/Download';

function App() {
  
  return (
    <div className="App">
      <Upload></Upload>
      <FaFileUpload size="8em"></FaFileUpload>
      <FaFileDownload size="8em"></FaFileDownload>
      <Download></Download>
    </div>
  );
}

export default App;
