import React, { useState } from 'react';

const DemoPage = () => {
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<null | {
    glaucoma: number;
    cataract: number;
    diabeticRetinopathy: number;
  }>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleSubmit = () => {
    if (!image) return;
    setLoading(true);
    setResults(null);

    setTimeout(() => {
      setLoading(false);
      setResults({
        glaucoma: Math.floor(Math.random() * 101),
        cataract: Math.floor(Math.random() * 101),
        diabeticRetinopathy: Math.floor(Math.random() * 101),
      });
    }, 10000);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-12">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Upload Eye Scan</h1>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-4"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
      >
        Analyze Image
      </button>

      {loading && (
        <div className="mt-6 text-lg text-blue-600 animate-pulse">
          Processing image... please wait (~10s)
        </div>
      )}

      {results && (
        <div className="mt-8 bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-semibold mb-4">Diagnosis Results</h2>
          <p>Glaucoma likelihood: <span className="font-bold">{results.glaucoma}%</span></p>
          <p>Cataract likelihood: <span className="font-bold">{results.cataract}%</span></p>
          <p>Diabetic Retinopathy: <span className="font-bold">{results.diabeticRetinopathy}%</span></p>
        </div>
      )}
    </div>
  );
};

export default DemoPage;
