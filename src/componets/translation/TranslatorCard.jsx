import React, { useState } from 'react';
import { FaCopy, FaVolumeUp } from 'react-icons/fa';
import './TranslatorCard.css';
import Languages from './Languages';
import waterfallImage from '../../assets/waterfall.jpg';

const TranslatorCard = () => {
  const [fromText, setFromText] = useState('');
  const [toText, setToText] = useState('');
  const [fromLanguage, setFromLanguage] = useState('en-GB');
  const [toLanguage, setToLanguage] = useState('ur-PK');
  const [loading, setLoading] = useState(false);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
  };

  const handleSpeak = (text, language) => {
    if (!text) return;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language;
    window.speechSynthesis.speak(utterance);
  };

  const translate = () => {
    setLoading(true);
    const url = `https://api.mymemory.translated.net/get?q=${fromText}&langpair=${fromLanguage}|${toLanguage}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setToText(data.responseData.translatedText);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Translation error:", error);
        setLoading(false);
      });
  };

  return (
    <div 
      className="translator-card-container" 
      style={{ backgroundImage: `url(${waterfallImage})` }}
    >
      <div className="greeting">It's me, MR AZMAT</div>
      <div className="translator-card">
        <h2> Language Translator</h2>
        <div className="text-area-section">
          <div className="input-section">
            <textarea
              placeholder="Enter text"
              value={fromText}
              onChange={(e) => setFromText(e.target.value)}
            />
            <div className="controls">
              <FaCopy onClick={() => handleCopy(fromText)} />
              <FaVolumeUp onClick={() => handleSpeak(fromText, fromLanguage)} />
            </div>
            <select value={fromLanguage} onChange={(e) => setFromLanguage(e.target.value)}>
              {Object.entries(Languages).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
          </div>

          <div className="output-section">
            <textarea readOnly value={toText} placeholder="Translated text will appear here" />
            <div className="controls">
              <FaCopy onClick={() => handleCopy(toText)} />
              <FaVolumeUp onClick={() => handleSpeak(toText, toLanguage)} />
            </div>
            <select value={toLanguage} onChange={(e) => setToLanguage(e.target.value)}>
              {Object.entries(Languages).map(([code, name]) => (
                <option key={code} value={code}>{name}</option>
              ))}
            </select>
          </div>
        </div>

        <button onClick={translate} disabled={loading}>
          {loading ? "Translating..." : "Translate"}
        </button>
      </div>
    </div>
  );
};

export default TranslatorCard;
