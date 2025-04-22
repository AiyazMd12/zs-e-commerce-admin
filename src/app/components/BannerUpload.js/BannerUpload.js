import React from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from "axios"
const BannerUpload = () => {
  // Validation schema using Yup
  // const validationSchema = Yup.object({
  //   video: Yup.mixed()
  //     .required('A video file is required')
  //     // .test('fileSize', 'File size too large (max 100MB)', (value) => {
  //     //   return value && value.size <= 10 * 1024 * 1024; // 10MB limit
  //     // })
  //     .test('fileType', 'Unsupported file type', (value) => {
  //       return value && ['video/mp4', 'video/mov', 'video/avi'].includes(value.type);
  //     }),
  // });

  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    const formData = new FormData();
    formData.append('video', values.video);
    try {
      await axios.post('https://zs-e-commerce-backend.onrender.com/v1/api/uploadVideo', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      alert('Video uploaded successfully!');
      resetForm();
    } catch (error) {
      console.log('Upload failed:', error);
      alert('Upload failed!');
    } finally {
      setSubmitting(false);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Upload Video</h1>
        <Formik
          initialValues={{ video: null }}
          // validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting, setFieldValue }) => (
            <Form>
              <div className="mb-4">
                <label htmlFor="video" className="block text-sm font-medium text-gray-700">
                  Select Video
                </label>
                <input
                  id="video"
                  name="video"
                  type="file"
                  accept="video/*"
                  className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                  onChange={(event) => {
                    setFieldValue('video', event.currentTarget.files[0]);
                  }}
                />
                <ErrorMessage
                  name="video"
                  component="div"
                  className="text-red-500 text-sm mt-1"
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
              >
                {isSubmitting ? 'Uploading...' : 'Upload Video'}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default BannerUpload;
