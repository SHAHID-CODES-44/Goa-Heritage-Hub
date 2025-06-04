import React, { useState, useEffect } from 'react';
import "./chatbotPage.css";
import {
    getMajorOptions,
    getRegionsByOption,
    getBeachTypesByRegion,
    getBeachesByType
} from '../services/chatbotService';

export default function ChatbotPage() {
    const [majorOptions, setMajorOptions] = useState([]);
    const [regions, setRegions] = useState([]);
    const [beachTypes, setBeachTypes] = useState([]);
    const [beaches, setBeaches] = useState([]);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm your Goa Beach Guide. How can I help you today?", sender: 'bot' }
    ]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    // Load major options on mount
    useEffect(() => {
        getMajorOptions()
            .then(options => {
                setMajorOptions(options);
                addBotMessage("Please select a category to begin:");
            })
            .catch(console.error);
    }, []);

    // Load regions when major option selected
    useEffect(() => {
        if (selectedOption) {
            setIsTyping(true);
            getRegionsByOption(selectedOption.option_id)
                .then(regions => {
                    setRegions(regions);
                    addBotMessage(`Great choice! Now select a region in Goa:`);
                    setIsTyping(false);
                })
                .catch(console.error);

            // Reset downstream selections
            setBeachTypes([]);
            setBeaches([]);
            setSelectedRegion(null);
            setSelectedType(null);
        }
    }, [selectedOption]);

    // Load beach types when region selected
    useEffect(() => {
        if (selectedRegion) {
            setIsTyping(true);
            getBeachTypesByRegion(selectedRegion.region_id)
                .then(types => {
                    setBeachTypes(types);
                    addBotMessage(`Nice! ${selectedRegion.region_name} is beautiful. What type of beach are you looking for?`);
                    setIsTyping(false);
                })
                .catch(console.error);

            setBeaches([]);
            setSelectedType(null);
        }
    }, [selectedRegion]);

    // Load beaches when beach type selected
    useEffect(() => {
        if (selectedType) {
            setIsTyping(true);
            getBeachesByType(selectedType.type_id)
                .then(beaches => {
                    setBeaches(beaches);
                    addBotMessage(`Here are some ${selectedType.type_name} beaches in ${selectedRegion.region_name}:`);
                    setIsTyping(false);
                })
                .catch(console.error);
        }
    }, [selectedType]);

    const addBotMessage = (text) => {
        setMessages(prev => [...prev, { text, sender: 'bot' }]);
    };

    const addUserMessage = (text) => {
        setMessages(prev => [...prev, { text, sender: 'user' }]);
    };

    const handleOptionSelect = (opt) => {
        setSelectedOption(opt);
        addUserMessage(opt.option_name);
    };

    const handleRegionSelect = (region) => {
        setSelectedRegion(region);
        addUserMessage(region.region_name);
    };

    const handleTypeSelect = (type) => {
        setSelectedType(type);
        addUserMessage(type.type_name);
    };

    const scrollToBottom = () => {
        const chatContainer = document.getElementById('chat-container');
        if (chatContainer) {
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, beaches]);

    return (
        <div className="chatbot-container">
            <div className="chatbot-header">
                <div className="chatbot-avatar">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                    </svg>
                </div>
                <div className="chatbot-title">
                    <h2>Goa Beach Guide</h2>
                    <p>Your personal beach assistant</p>
                </div>
                <div className="chatbot-status">
                    <span className={isTyping ? 'typing' : ''}>
                        {isTyping ? 'typing...' : 'online'}
                    </span>
                </div>
            </div>

            <div className="chatbot-messages" id="chat-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.sender === 'bot' && (
                            <div className="bot-avatar">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                                </svg>
                            </div>
                        )}
                        <div className="message-content">
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}

                {/* Step 1: Major Options */}
                {majorOptions.length > 0 && !selectedOption && (
                    <div className="message bot">
                        <div className="bot-avatar">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                        <div className="message-content options">
                            {majorOptions.map(opt => (
                                <button
                                    key={opt.option_id}
                                    onClick={() => handleOptionSelect(opt)}
                                    className={`option-btn ${selectedOption?.option_id === opt.option_id ? 'active' : ''}`}
                                >
                                    {opt.option_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Regions */}
                {regions.length > 0 && !selectedRegion && (
                    <div className="message bot">
                        <div className="bot-avatar">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                        <div className="message-content options">
                            {regions.map(r => (
                                <button
                                    key={r.region_id}
                                    onClick={() => handleRegionSelect(r)}
                                    className={`option-btn ${selectedRegion?.region_id === r.region_id ? 'active' : ''}`}
                                >
                                    {r.region_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 3: Beach Types */}
                {beachTypes.length > 0 && !selectedType && (
                    <div className="message bot">
                        <div className="bot-avatar">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                        <div className="message-content options">
                            {beachTypes.map(t => (
                                <button
                                    key={t.type_id}
                                    onClick={() => handleTypeSelect(t)}
                                    className={`option-btn ${selectedType?.type_id === t.type_id ? 'active' : ''}`}
                                >
                                    {t.type_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 4: Beaches List */}
                {beaches.length > 0 && (
                    <div className="message bot">
                        <div className="bot-avatar">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                        <div className="message-content beaches">
                            {beaches.map(b => (
                                <div key={b.beach_id} className="beach-card">
                                    <h3>{b.beach_name}</h3>
                                    {b.image_path && (
                                        <div className="beach-image">
                                            <img src={`/uploads/BeachPage/${b.image_path}`} alt={b.name} className="beach-image" />
                                        </div>
                                    )}
                                    <p className="beach-description">{b.description}</p>
                                    <a 
                                        href={b.directions_url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="directions-btn"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                        </svg>
                                        Get Directions
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {isTyping && (
                    <div className="message bot typing-indicator">
                        <div className="bot-avatar">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                            </svg>
                        </div>
                        <div className="message-content">
                            <div className="typing-dots">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            <div className="chatbot-footer">
                <p>@Goa beach Guide {new Date().getFullYear()}</p>
            </div>
        </div>
    );
}