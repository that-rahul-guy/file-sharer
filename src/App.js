import './App.css';
// import { FaFileUpload,FaFileDownload } from 'react-icons/fa';
import Upload from './components/upload/Upload';
import Download from './components/download/Download';
import NavBar from './components/navbar/Navbar';


function App() {
  
  return (
    <div className="App">
      <NavBar></NavBar>
      <hr></hr>
      <div className="upload-child">
        <div>
        <Upload></Upload>
        {/* <FaFileUpload size="8em"></FaFileUpload> */}
        </div>
        	
      </div>

      <div className="download-child">  
        {/* <FaFileDownload size="8em"></FaFileDownload> */}
        <Download></Download>
      </div>
    </div>
  );
}

export default App;
