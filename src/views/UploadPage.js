/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styles from '../styles/uploadPage.module.css';
import cloudImage from '../assets/img/upload/cloud-computing.png';
import ResumeService from 'api/resumeService';

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
      ResumeService.uploadResume(uploadedFile)
        .then((response) => {
          console.log(response.data); // handle response data
        })
        .catch((error) => {
          console.log(error); // handle error
        });

        fileReader.readAsDataURL(uploadedFile);

    };
    }
  
  
  const removeFile = () => {
    setFile(null);

  };
  const history = useHistory();
  
  function handleNextButtonClick() {
    history.push('/admin/index');
  }

  return (

    <div className={styles['upload']}>
      <div className={styles['file-upload']}>
       2. UPLOAD YOUR RESUME
        <div className={styles['image-upload-wrap']}>

          <div className={styles['upload-content']}>
            {file ? (
              <div className={styles['uploaded-file']}>
                 <div className={styles["file-container"]}>
                   <img src={cloudImage}/>
                     <p>{fileName}</p>
                         <button onClick={() => removeFile(file)}>X</button>
                  </div>

              </div>
            ) : (
              <div className={styles['drag-text']}>
                        <input
              id='file-upload'
              className={styles['file-upload-input']}
              type='file'
              onChange={handleFileChange}
              accept='application/pdf'
            />

                <img
                 src={cloudImage}
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
                  className={styles['file-upload-button']}
                  type='button'
                  onClick={handleNextButtonClick}
                  >
                  Add File
                </button>
      </div>
    

    </div>
  );
}
export default UploadPage;
