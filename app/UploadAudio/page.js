"use client"
import React, { useState } from 'react';

const FileUpload = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    setFile(selectedFile);
  };

  const handleUpload = () => {
    if (!file) {
      console.log('No file selected');
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      const base64data = reader.result.split(',')[1]; // Extract base64 data

      // Create an anchor element to download the file
      const link = document.createElement('a');
      link.href = `data:${file.type};base64,${base64data}`;
      link.download = file.name;
      link.click();
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
};

export default FileUpload;
