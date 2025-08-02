import React from 'react';
import { useDailyTopic } from '../../hooks/useDailyTopic';
import { formatVideoUrl } from '../../utils/helpers';
import './DailyTopic.css';

const DailyTopic = () => {
  const { topicData, loading, error, refreshTopic } = useDailyTopic();

  if (loading) {
    return (
      <div className="daily-topic-container">
        <div className="loading-spinner">
          <div className="spinner"></div>
          <p>Loading today's topic...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="daily-topic-container">
        <div className="error-message">
          <h2>Oops! Something went wrong</h2>
          <p>{error}</p>
          <button onClick={refreshTopic} className="retry-button">
            Try Again
          </button>
        </div>
      </div>
    );
  }

  if (!topicData) {
    return (
      <div className="daily-topic-container">
        <div className="error-message">
          <h2>No topic available</h2>
          <p>Please try again later.</p>
          <button onClick={refreshTopic} className="retry-button">
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="daily-topic-container">
      <div className="topic-header">
        <h1 className="topic-title">Today's Topic</h1>
        <h2 className="topic-name">{topicData.topic}</h2>
      </div>

      <div className="topic-content">
        <div className="content-section">
          <h3>📚 Learn About This Topic</h3>
          <div className="paragraph-container">
            <p>{topicData.paragraph}</p>
          </div>
        </div>

        <div className="content-section">
          <h3>🎥 Educational Video</h3>
          {topicData.video_url ? (
            <div className="video-container">
              <iframe
                src={formatVideoUrl(topicData.video_url)}
                title={`Educational video about ${topicData.topic}`}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="video-iframe"
              ></iframe>
            </div>
          ) : (
            <div className="video-placeholder">
              <p>No video available for this topic yet! 🚀</p>
              <p>We're working on adding awesome videos for each topic.</p>
            </div>
          )}
        </div>

        <div className="content-section">
          <h3>✏️ Grammar Exercise</h3>
          <div className="grammar-exercise">
            <p><strong>Find the mistakes in these sentences:</strong></p>
            <div className="exercise-text">
              {topicData.grammar_exercise}
            </div>
          </div>
          
          <details className="answer-key-container">
            <summary className="answer-key-toggle">🔍 Show Answer Key (Teachers Only)</summary>
            <div className="answer-key">
              <h4>Corrected Sentences:</h4>
              <div className="answer-list">
                {topicData.grammar_answer_key && topicData.grammar_answer_key.length > 0 ? (
                  topicData.grammar_answer_key.map((answer, index) => (
                    <div key={index} className="answer-item">
                      <span className="answer-number">{index + 1}.</span>
                      <span className="answer-text">{answer}</span>
                    </div>
                  ))
                ) : (
                  <p className="no-answers">No answer key available.</p>
                )}
              </div>
            </div>
          </details>
        </div>
      </div>

      <div className="topic-footer">
        <button onClick={refreshTopic} className="refresh-button">
          🔄 Get New Topic
        </button>
      </div>
    </div>
  );
};

export default DailyTopic; 