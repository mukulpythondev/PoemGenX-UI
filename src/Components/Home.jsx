import React, { useState } from 'react';

function Home() {
  const [selectedLanguage, setSelectedLanguage] = useState('English');
  const [inputText, setInputText] = useState('');
  const [translatedText, setTranslatedText] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [copySuccess, setCopySuccess] = useState(false); // State to manage the copy success popup

  const handleChangeLanguage = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleTranslate = () => {
    setTranslatedText(inputText);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(translatedText);
    setCopySuccess(true); // Set copy success to true to show the popup
    setTimeout(() => setCopySuccess(false), 1500); // Reset copy success after 1.5 seconds
  };

  return (
    <div className=" min-h-screen flex justify-center items-center">
      <div className=" p-8 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label htmlFor="language" className="text-sm font-medium text-gray-600 block">
            Select Language:
          </label>
          <select
            id="language"
            name="language"
            className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-3"
            value={selectedLanguage}
            onChange={handleChangeLanguage}
          >
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="text" className="text-sm font-medium text-gray-600 block">
            Enter Poem
          </label>
          <textarea
            id="text"
            name="text"
            rows="4"
            className="border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 w-full py-2 px-3 resize-none"
            value={inputText}
            onChange={handleInputChange}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md mr-2"
          onClick={handleTranslate}
        >
          Translate
        </button>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-blur-sm bg-black bg-opacity-50">
          <div className="bg-white min-h-56  w-5/12 flex flex-col items-center justify-center relative rounded-lg p-8 ">
            <button className="absolute top-2 right-2 text-gray-600" onClick={handleCloseModal}>
              <img className='h-6' src="https://icons.veryicon.com/png/o/miscellaneous/medium-thin-linear-icon/cross-23.png" alt="" />
            </button>
            <h3 className='text-xl font-bold text-center'> Translated Poem </h3>
            <div className=" w-11/12 bg-zinc-100 overflow-auto max-h-48  ">
              <p>{translatedText}</p>
              <div className="flex mt-4 justify-between">
                <button className="t" onClick={copyToClipboard}>
                 {copySuccess ? <h1 className='italic' > Copied! </h1> :  <img className='h-6 hover:scale-95 ' src="https://cdn.icon-icons.com/icons2/4043/PNG/96/clipboard_copy_icon_256879.png" alt="" /> }
                </button>
                <span className="text-gray-500">Version 1</span>
              </div>
            </div>
            <button
          className="bg-blue-500 mt-4 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded-md shadow-md mr-2"
        >
          Regenerate
        </button>
          </div>
        </div>
      )}
   
    </div>
  );
}

export default Home;
