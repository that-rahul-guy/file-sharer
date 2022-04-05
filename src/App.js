import './App.css';
import Upload from './components/upload/Upload';
import Download from './components/download/Download';
import NavBar from './components/navbar/Navbar';
import { FiUploadCloud,FiDownloadCloud } from 'react-icons/fi';

function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <hr></hr>

      <div className="upload-child">
        <FiUploadCloud
          size={90}
        >
        </FiUploadCloud>
        <p>Upload a File</p>
        <Upload></Upload>
      </div>

      <div className="download-child">
        <FiDownloadCloud
          size={90}
        >
        </FiDownloadCloud>
        <p>Have code?
        Download the file!
        </p>
        <Download></Download>
      </div>
    </div>
  );
}

export default App;
