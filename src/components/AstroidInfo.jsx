import React,{useState,useEffect} from 'react';
import './MoonInfo.css';

const AstroidInfo = ({astroidInfo,handleClose}) => {
    const { name, description, size , orbit, Surface, Exploration, Composition, mcqs } = astroidInfo;
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
        <div className="moon-info">
          <button onClick={handleClose} className="close-icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
              <path d="M12 10.586L18.364 4.222 19.778 5.636 13.414 12l6.364 6.364-1.414 1.414L12 13.414l-6.364 6.364-1.414-1.414L10.586 12 4.222 5.636 5.636 4.222 12 10.586z" />
            </svg>
          </button>
    
          {currentPage === 'info' && (
            <div>
              <h2>{name}</h2>
              <p><strong>Description:</strong> {description}</p>
              <p><strong>Size:</strong> {size}</p>
              <p><strong>Orbit:</strong> {orbit}</p>
              <p><strong>Surface:</strong> {Surface}</p>
              <p><strong>Exploration:</strong> {Exploration}</p>
              <p><strong>Composition:</strong> {Composition}</p>
              <button onClick={() => handlePageChange('video')}>Read More: Video</button>
              <button onClick={() => handlePageChange('questions')}>Read More: Questions</button>
            </div>
          )}
    
          {currentPage === 'video' && (
            <div className="video-container">
              <h3>Learn More About {name}</h3>
              {astroidInfo.videoUrl ? (
                <iframe
                  title={`Video about ${name}`}
                  src={astroidInfo.videoUrl}
                  frameBorder="0"
                  allowFullScreen
                  className="asteroid-video"
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
                          <span
                            style={{
                              color:
                                selectedOptions[questionIndex] === option
                                  ? selectedOptions[questionIndex] === mcq.correctAnswer
                                    ? 'green'
                                    : 'red'
                                  : '',
                            }}
                          >
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

export default AstroidInfo;