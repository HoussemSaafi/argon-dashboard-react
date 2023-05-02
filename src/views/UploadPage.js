/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import '../styles/uploadPage.css';

function UploadPage() {
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");

  const handleFileChange = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      const fileReader = new FileReader();
      fileReader.onload = () => {
        setFile(fileReader.result);
        setFileName(uploadedFile.name); // set the file name
      };
      fileReader.readAsDataURL(uploadedFile);
    }
  };
  
  const removeFile = () => {
    setFile(null);

  };

  return (
    <div className='upload'>

      <div className='file-upload'>
       2. UPLOAD YOUR RESUME
        <div className='image-upload-wrap'>

          <div className='upload-content'>
            {file ? (
              <div className='uploaded-file'>
                 <div className="file-container">
                   <img src="../assets/img/upload/cloud-computing.png"/>
                     <p>{fileName}</p>
                         <button onClick={() => removeFile(file)}>X</button>
                  </div>

              </div>
            ) : (
              <div className='drag-text'>
                        <input
              id='file-upload'
              className='file-upload-input'
              type='file'
              onChange={handleFileChange}
              accept='application/pdf'
            />

                <img
                  src='cloud-computing.png'
                  height={150}
                  alt='Upload Cloud'
                />

                <h2>Upload Your Resume</h2>
                <p>Drag and drop a file or select add file</p>

              </div>
            )}
          </div>

        </div>
        <br></br>
        <button
                  className='file-upload-btn '
                  type='button'
                  onClick={() => document.getElementById('file-upload').click()}
                >
                  Add File
                </button>
      </div>
    

    </div>
  );
}
export default UploadPage;
