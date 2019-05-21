import React, { useRef } from 'react';
console.log(React.version);

export function FileUpload() {
  const fileInputRef = useRef();

  function examineFiles() {
    console.log(fileInputRef.current.files);

    const data = new FormData(0);
    data.append('filesISay', fileInputRef.current.files[0]);

    fetch('/api/SampleData/file-upload-demo', {
      method: 'POST',
      body: data
    }).then(response => {
      console.log(response)
    });
  }
  return <div>
    <form>
      <input accept='.csv' ref={fileInputRef} type='file' id='file-input'/>
    </form>
    <p><button onClick={examineFiles}>Files, you say?</button></p>
  </div>
}