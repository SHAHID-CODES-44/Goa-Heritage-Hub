import React, { useState, useEffect } from 'react';
import { getFAQs, submitFAQ } from '../services/faqService';
import './FAQPage.css';

const FAQPage = () => {
  const [question, setQuestion] = useState('');
  const [faqs, setFaqs] = useState([]);
  const [error, setError] = useState('');

  const fetchFAQs = async () => {
    const data = await getFAQs();
    setFaqs(data);
  };

  useEffect(() => {
    fetchFAQs();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!question.trim()) return;

    const res = await submitFAQ(question);

    if (res?.question) {
      setQuestion('');
      setError('');
      fetchFAQs();
    } else {
      setError('❌ Failed to add question. Try again.');
    }
  };

  return (
    <div className="faq-page-container">
      <div className="faq-container">
        <div className="header-line"></div>
        <h2 className="header">Frequently Asked Questions</h2>
        
        <div className="predefined-faqs">
          <h3 className="question">What are the best adventure activities to do in Goa?</h3>
          <ol className="answer-list">
            <li className="list-item"><span className="number-circle">1</span> ATV Biking: ATV biking is proudly one of the most thrilling of adventure sports in Goa. The quad bikes, or ATV can be driven through any of the region's scenic terrains, whether it be the sandy stretches of a beach or through a plantation. Mandrem is one of the most popular sites in Goa for ATV biking.</li>
            <li className="list-item"><span className="number-circle">2</span> Hiking: Although Goa is best known for its beaches, its forests and hills are pretty well suited for hiking adventures as well. The routes here are fairly mild, and can be attempted by first time hikers as well. Some of the most popular hiking routes in Goa are the Dudhsagar Falls route, the Todo Waterfall trek, Mollem National Park trek and Collem trek.</li>
            <li className="list-item"><span className="number-circle">3</span> Hot Air Balloon Riding: Hot Air Balloon ride may just be one of the most romantic of Goa adventure sports. In Goa, especially, this scenic ride through the skies greet one with panoramic views of the lovely beaches below. Besides, the rides take off at dawn each day, promising front seat views to the sunrise.</li>
          </ol>
          
          <h3 className="question">What are the best water sports to do in Goa?</h3>
          <ol className="answer-list">
            <li className="list-item"><span className="number-circle">1</span> Windsurfing: A combination of surfing and sailing, windsurfing is one of the most extreme of Goa adventure sports. The sport requires some experience and expertise; however, first time surfers can try it as well after a preliminary training session.</li>
            <li className="list-item"><span className="number-circle">2</span> River Rafting: Another extreme adventure on our list, river rafting is as exciting as it is daring. The activity involves navigating one's ways through unpredictable rapids in a boat. There are several rivers in Goa where one can enjoy river rafting, offering rapids of varying levels for rafters of different expertise.</li>
            <li className="list-item"><span className="number-circle">3</span> Kayaking: One of the mildest and easiest adventure sports in Goa, kayaking offers a serene boat ride with the promise of incredible views. Kayaking in Goa is generally done on calmer grounds away from the beach, such as the Dona Paula Jetty, or the backwaters of Zuari and Sal. One does not need any prior expertise to row a kayak.</li>
          </ol>
          
          <h3 className="question">What is the best time to visit Goa for adventure activities?</h3>
          <p className="answer">The best time to visit Goa for adventure activities is during winter, between the months of November and February. The weather during this time remains near-perfect, with mild temperatures and little or no rainfall. This makes it the ideal time to take part in outdoor adventure sports.</p>
        </div>
        
        <div className="user-question-section">
          <h3 className="user-question-header">Have a different question?</h3>
          <form onSubmit={handleSubmit} className="question-form">
            <input
              type="text"
              placeholder="Enter your question"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="question-input"
            />
            <button type="submit" className="submit-button">Submit</button>
          </form>
          {error && <p className="error-message">{error}</p>}
        </div>
        
        <div className="user-questions">
          <h3 className="user-questions-header">User Questions</h3>
          <ul className="user-questions-list">
            {faqs.length > 0 ? (
              faqs.map((faq) => (
                <li key={faq.id} className="user-question-item">
                  {faq.question}
                </li>
              ))
            ) : (
              <li className="no-questions">No questions yet. Be the first to ask!</li>
            )}
          </ul>

         
        </div>
         <div className="faq-btn">You May Find Your Answers Here</div>
      </div>
    </div>
  );
};

export default FAQPage;