const useUploadImage = (event: React.ChangeEvent<HTMLInputElement>) => {
  const val = event.target.value;
  // const file = event.target.files[0];
  // const size = file.size ? file.size / 1024 / 1024 : 0;
  // const regex = /(\.jpg|\.jpeg|\.png)$/i;
  // if (!regex.exec(val)) {
  //   // error('File type must be JPG, JPEG or PNG');
  //   return;
  // }
  // if (size > 1) {
  //   // error('File size exceeded 1MB, consider optimizing your image');
  //   return;
  // }
  // // if (file) {
  // //   setFile(file);
  // // }
  return val;
};

export default useUploadImage;
