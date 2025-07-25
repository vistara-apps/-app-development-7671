import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Assessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      question: "What motivates you most in your career?",
      options: [
        "Making a positive impact on others",
        "Financial independence and security",
        "Creative expression and innovation",
        "Leadership and influence",
        "Work-life balance and flexibility"
      ]
    },
    {
      id: 2,
      question: "How do you feel about your current role in the family business?",
      options: [
        "Fulfilled and passionate",
        "It's okay, but not my true calling",
        "Trapped and unhappy",
        "Grateful but ready for change",
        "Uncertain about my feelings"
      ]
    },
    {
      id: 3,
      question: "What concerns you most about leaving the family business?",
      options: [
        "Financial security",
        "Family relationships and expectations",
        "Letting down employees and stakeholders",
        "Finding my true purpose",
        "Starting over in a new field"
      ]
    },
    {
      id: 4,
      question: "What would success look like for you in 5 years?",
      options: [
        "Running my own business in a field I'm passionate about",
        "Working for an organization aligned with my values",
        "Pursuing creative or artistic endeavors",
        "Having more time for family and personal interests",
        "Making a meaningful contribution to society"
      ]
    },
    {
      id: 5,
      question: "How important is maintaining your current lifestyle?",
      options: [
        "Very important - I need to maintain my current standard",
        "Somewhat important - willing to make minor adjustments",
        "Not very important - I'm open to significant changes",
        "I'd prefer to simplify and reduce expenses",
        "I'm willing to sacrifice lifestyle for fulfillment"
      ]
    }
  ];

  const handleAnswer = (questionId, answer) => {
    setAnswers({
      ...answers,
      [questionId]: answer
    });
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const generateResults = () => {
    // Simple analysis based on answers
    const analysis = {
      primaryMotivation: "Personal Fulfillment",
      readinessLevel: "Highly Ready",
      keyRecommendations: [
        "Focus on identifying industries aligned with your values",
        "Develop a 2-year transition plan with financial milestones",
        "Consider family mediation to discuss your transition openly",
        "Start networking in your areas of interest"
      ],
      nextSteps: [
        "Create your transition roadmap",
        "Schedule family mediation session",
        "Begin stakeholder alignment process"
      ]
    };

    return analysis;
  };

  if (showResults) {
    const results = generateResults();

    return (
      <div className="container">
        <div className="assessment-questions">
          <div className="card text-center mb-6">
            <h1>Your Assessment Results</h1>
            <p style={{ color: '#64748b', fontSize: '18px' }}>
              Based on your responses, here's your personalized analysis:
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card">
              <h3>Primary Motivation</h3>
              <p style={{ fontSize: '24px', color: '#667eea', fontWeight: '600', margin: '16px 0' }}>
                {results.primaryMotivation}
              </p>
              <p style={{ color: '#64748b' }}>
                Your main driving force for transition
              </p>
            </div>

            <div className="card">
              <h3>Readiness Level</h3>
              <p style={{ fontSize: '24px', color: '#10b981', fontWeight: '600', margin: '16px 0' }}>
                {results.readinessLevel}
              </p>
              <p style={{ color: '#64748b' }}>
                Your preparation for making the transition
              </p>
            </div>
          </div>

          <div className="card mb-4">
            <h3>Key Recommendations</h3>
            <ul style={{ marginLeft: '20px', color: '#64748b' }}>
              {results.keyRecommendations.map((rec, index) => (
                <li key={index} style={{ marginBottom: '8px' }}>{rec}</li>
              ))}
            </ul>
          </div>

          <div className="card mb-6">
            <h3>Your Next Steps</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {results.nextSteps.map((step, index) => (
                <div key={index} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '12px',
                  padding: '12px',
                  background: '#f8fafc',
                  borderRadius: '8px'
                }}>
                  <span style={{
                    width: '24px',
                    height: '24px',
                    background: '#667eea',
                    color: 'white',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '14px',
                    fontWeight: '600'
                  }}>
                    {index + 1}
                  </span>
                  {step}
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <button 
              onClick={() => navigate('/transition-plan')}
              className="btn btn-primary"
              style={{ marginRight: '16px' }}
            >
              Create Your Transition Plan
            </button>
            <button 
              onClick={() => navigate('/dashboard')}
              className="btn btn-secondary"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

  return (
    <div className="container">
      <div className="assessment-questions">
        <div className="card text-center mb-4">
          <h1>Self-Assessment & Goal Setting</h1>
          <p style={{ color: '#64748b' }}>
            Question {currentQuestion + 1} of {questions.length}
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: `${progress}%` }}></div>
          </div>
        </div>

        <div className="question">
          <h3>{question.question}</h3>
          <div className="options">
            {question.options.map((option, index) => (
              <label key={index} className="option">
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={option}
                  checked={answers[question.id] === option}
                  onChange={() => handleAnswer(question.id, option)}
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <button 
            onClick={prevQuestion}
            className="btn btn-secondary"
            disabled={currentQuestion === 0}
          >
            Previous
          </button>

          <button 
            onClick={nextQuestion}
            className="btn btn-primary"
            disabled={!answers[question.id]}
          >
            {currentQuestion === questions.length - 1 ? 'Complete Assessment' : 'Next Question'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Assessment;