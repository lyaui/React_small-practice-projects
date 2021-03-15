import React, { useState } from 'react';
import ProgressBar from './ProgressBar';

const UploadForm = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);
  const onChangeFile = (e) => {
    const selectedFile = e.target.files[0];
    const types = ['image/png', 'image/jpeg'];
    if (selectedFile && types.includes(selectedFile.type)) {
      setFile(selectedFile);
      setError(null);
    } else {
      setFile(null);
      setError('Please select an image file (png or jpeg)');
      return;
    }
  };
  return (
    <form>
      <label>
        <input type='file' onChange={onChangeFile} />
        <span>+</span>
      </label>
      <div className='output'>
        {error && <div className='error'>{error}</div>}
        {file && <div>{file.name}</div>}
        {file && <ProgressBar file={file} setFile={setFile}></ProgressBar>}
      </div>
    </form>
  );
};

export default UploadForm;
