import React, { useState,useEffect } from 'react';
// /downloadFile?link=
function Download() {
  const [downloadToken, setDownloadToken] = useState('');
  const [fileName, setFileName] = useState('');
  
  useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    if(downloadToken){
      fetch(
        'http://localhost:5000/fileName?token='+downloadToken,
        {
          method: 'GET'
        }
      ).then((response) => response.json())
      .then((result) => {
        setFileName(result['fileName']);
        console.log(result);
        console.log('Downloaded:', fileName);
      })
      .catch((error) => {
        console.error('Error:', error);
      })
    }
    
  }, [downloadToken, fileName]);
  
  const handleDownload = (e) => {
    e.preventDefault();

    fetch(
      'http://localhost:5000/downloadFile?link='+downloadToken,
      {
        method: 'GET'
      }
    ).then((response) => response.blob())
    .then((blob) => {
      // Create blob link to download
      const url = window.URL.createObjectURL(
        new Blob([blob]),
      );
      const link = document.createElement('a');
      link.href = url;
      console.log(fileName);
      link.setAttribute(
        'download',
        fileName,
      );
      // Append to html link element page
    document.body.appendChild(link);

    // Start download
    link.click();

    // Clean up and remove the link
    link.parentNode.removeChild(link);
    });  
  }

  return (
    <div>
        <form onSubmit={handleDownload}>
          <input
          text
          placeholder='Enter the CODE here'
          onChange={(e) => setDownloadToken(e.target.value)}
          required>
          </input>
          <div>
          <button>
            Download
          </button>
          </div>
        </form>
    </div>
  )
}

export default Download;