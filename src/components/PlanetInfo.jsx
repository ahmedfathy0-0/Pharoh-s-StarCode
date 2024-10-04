import React, { useState } from 'react';
import './Planetinfo.css';

const PlanetInfo = ({ planetInfo, handleClose }) => {
  const { text, para, lengthOfYear, distanceFromSun, numberOfMoon, videoUrl, mcqs ,RelationshipToEarth="" } = planetInfo;
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isAnswered, setIsAnswered] = useState({});
  const [currentPage, setCurrentPage] = useState('info'); 

  const handleOptionChange = (questionIndex, option) => {
    setSelectedOptions((prev) => ({
      ...prev,
      [questionIndex]: option,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const questionIndex = parseInt(event.target.dataset.index, 10);
    
    setIsAnswered((prev) => ({
      ...prev,
      [questionIndex]: true,
    }));
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="planet-info">
      <button onClick={handleClose} className="close-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="24"
          height="24"
        >
          <path d="M12 10.586L18.364 4.222 19.778 5.636 13.414 12l6.364 6.364-1.414 1.414L12 13.414l-6.364 6.364-1.414-1.414L10.586 12 4.222 5.636 5.636 4.222 12 10.586z" />
        </svg>
      </button>
      {currentPage === 'info' && (
        <div>
          <h2>{text}</h2>
          <p>{para}</p>
          <p><strong>Length of Year:</strong> {lengthOfYear}</p>
          <p><strong>Distance from Sun:</strong> {distanceFromSun}</p>
          <p><strong>Number of Moons:</strong> {numberOfMoon}</p>
          <p><strong>Relationship to Earth:</strong> {RelationshipToEarth}</p>
          <button onClick={() => handlePageChange('video')}>Read More: Video</button>
          <button onClick={() => handlePageChange('questions')}>Read More: Questions</button>
        </div>
      )}

      {currentPage === 'video' && (
        <div className="video-container">
          <h3>Learn More About {text}</h3>
          {videoUrl ? (
            <iframe
              title={`Video about ${text}`}
              src={videoUrl}
              frameBorder="0"
              allowFullScreen
              className="planet-video"
            ></iframe>
          ) : (
            <p>No video available.</p>
          )}
          <button onClick={() => handlePageChange('info')}>Back to Info</button>
          <button onClick={() => handlePageChange('questions')}>Next: Questions</button>
        </div>
      )}

      {currentPage === 'questions' && (
        <div>
          {mcqs && mcqs.map((mcq, questionIndex) => (
            <div className="exercise-section" key={questionIndex}>
              <h3>Multiple Choice Question {questionIndex + 1}:</h3>
              {!isAnswered[questionIndex] ? (
                <form onSubmit={handleSubmit} data-index={questionIndex}>
                  <p>{mcq.question}</p>
                  {mcq.options.map((option, index) => (
                    <div key={index}>
                      <label>
                        <input
                          type="radio"
                          value={option}
                          checked={selectedOptions[questionIndex] === option}
                          onChange={() => handleOptionChange(questionIndex, option)}
                          required
                        />
                        {option}
                      </label>
                    </div>
                  ))}
                  <button type="submit">Submit</button>
                </form>
              ) : (
                <div>
                  <p>{mcq.question}</p>
                  {mcq.options.map((option, index) => (
                    <div key={index}>
                      <span style={{
                        color: selectedOptions[questionIndex] === option
                          ? (selectedOptions[questionIndex] === mcq.correctAnswer ? 'green' : 'red')
                          : ''
                      }}>
                        {option}
                      </span>
                    </div>
                  ))}
                  <p className="feedback">
                    {selectedOptions[questionIndex] === mcq.correctAnswer
                      ? 'Correct! 🎉'
                      : `Incorrect. The correct answer is: ${mcq.correctAnswer}`}
                  </p>
                </div>
              )}
            </div>
          ))}
          <button onClick={() => handlePageChange('video')}>Back to Video</button>
          <button onClick={() => handlePageChange('info')}>Back to Info</button>
        </div>
      )}
    </div>
  );
};

export default PlanetInfo;

