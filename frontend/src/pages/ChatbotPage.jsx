import React, { useState, useEffect } from 'react';
import "./chatbotPage.css";
import {
    getMajorOptions,
    getRegionsByOption,
    getBeachTypesByRegion,
    getBeachesByType,
    getWildlifeTypesByRegion,
    getWildlifePlacesByType,
    getAdventureTypes,           // no region param
    getAdventurePlacesByType
} from '../services/chatbotService';

export default function ChatbotPage() {
    const [majorOptions, setMajorOptions] = useState([]);
    const [regions, setRegions] = useState([]);
    const [beachTypes, setBeachTypes] = useState([]);
    const [beaches, setBeaches] = useState([]);
    const [wildlifeTypes, setWildlifeTypes] = useState([]);
    const [wildlifePlaces, setWildlifePlaces] = useState([]);
    const [adventureTypes, setAdventureTypes] = useState([]);
    const [adventurePlaces, setAdventurePlaces] = useState([]);
    const [messages, setMessages] = useState([
        { text: "Hello! I'm your Goa Beach Guide. How can I help you today?", sender: 'bot' }
    ]);
    const [selectedOption, setSelectedOption] = useState(null);
    const [selectedRegion, setSelectedRegion] = useState(null);
    const [selectedType, setSelectedType] = useState(null);
    const [isTyping, setIsTyping] = useState(false);

    useEffect(() => {
        getMajorOptions()
            .then(options => {
                setMajorOptions(options);
                addBotMessage("Please select a category to begin:");
            })
            .catch(console.error);
    }, []);

   useEffect(() => {
    if (selectedOption) {
        setIsTyping(true);
        getRegionsByOption(selectedOption.option_id)
            .then(regions => {
                setTimeout(() => {
                    setRegions(regions);
                    addBotMessage(`Great choice! Now select a region in Goa:`);
                    setIsTyping(false);
                }, 2000);
            })
            .catch(console.error);

        // reset downstream states
        setBeachTypes([]);
        setBeaches([]);
        setWildlifeTypes([]);
        setWildlifePlaces([]);
        setAdventureTypes([]);
        setAdventurePlaces([]);
        setSelectedRegion(null);
        setSelectedType(null);
    }
}, [selectedOption]);

useEffect(() => {
    if (selectedRegion) {
        setIsTyping(true);
        const optionName = selectedOption.option_name.toLowerCase();

        if (optionName.includes('beach')) {
            getBeachTypesByRegion(selectedRegion.region_id)
                .then(types => {
                    setTimeout(() => {
                        setBeachTypes(types);
                        addBotMessage(`Nice! ${selectedRegion.region_name} is beautiful. What type of beach are you looking for?`);
                        setIsTyping(false);
                    }, 2000);
                })
                .catch(console.error);
            setWildlifeTypes([]);
            setWildlifePlaces([]);
            setAdventureTypes([]);
            setAdventurePlaces([]);
        } else if (optionName.includes('wildlife')) {
            getWildlifeTypesByRegion(selectedRegion.region_id)
                .then(types => {
                    setTimeout(() => {
                        setWildlifeTypes(types);
                        addBotMessage(`Awesome! What kind of wildlife are you interested in?`);
                        setIsTyping(false);
                    }, 2000);
                })
                .catch(console.error);
            setBeachTypes([]);
            setBeaches([]);
            setAdventureTypes([]);
            setAdventurePlaces([]);
        } else if (optionName.includes('adventure')) {
            getAdventureTypes()
                .then(types => {
                    setTimeout(() => {
                        setAdventureTypes(types);
                        addBotMessage(`Exciting! What type of adventure activities interest you?`);
                        setIsTyping(false);
                    }, 2000);
                })
                .catch(console.error);
            setBeachTypes([]);
            setBeaches([]);
            setWildlifeTypes([]);
            setWildlifePlaces([]);
        }
        setSelectedType(null);
    }
}, [selectedRegion]);

useEffect(() => {
    if (selectedType) {
        setIsTyping(true);
        const optionName = selectedOption.option_name.toLowerCase();

        if (optionName.includes('beach')) {
            getBeachesByType(selectedType.type_id)
                .then(beaches => {
                    setTimeout(() => {
                        setBeaches(beaches);
                        addBotMessage(`Here are some ${selectedType.type_name} beaches in ${selectedRegion.region_name}:`);
                        setIsTyping(false);
                    }, 2000);
                })
                .catch(console.error);
            setWildlifePlaces([]);
            setAdventurePlaces([]);
        } else if (optionName.includes('wildlife')) {
            getWildlifePlacesByType(selectedType.type_id)
                .then(places => {
                    setTimeout(() => {
                        setWildlifePlaces(places);
                        addBotMessage(`Here are some ${selectedType.type_name} wildlife places in ${selectedRegion.region_name}:`);
                        setIsTyping(false);
                    }, 1000);
                })
                .catch(console.error);
            setBeaches([]);
            setAdventurePlaces([]);
        } else if (optionName.includes('adventure')) {
            getAdventurePlacesByType(selectedType.type_id)
                .then(places => {
                    setTimeout(() => {
                        setAdventurePlaces(places);
                        addBotMessage(`Here are some ${selectedType.type_name} adventure spots in ${selectedRegion.region_name}:`);
                        setIsTyping(false);
                    }, 2000);
                })
                .catch(console.error);
            setBeaches([]);
            setWildlifePlaces([]);
        }
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
        if (chatContainer) chatContainer.scrollTop = chatContainer.scrollHeight;
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, beaches, wildlifePlaces, adventurePlaces]);

    return (
        <div className="chatbot-container">
            <div className="chatbot-messages" id="chat-container">
                {messages.map((msg, index) => (
                    <div key={index} className={`message ${msg.sender}`}>
                        {msg.sender === 'bot' && (
                            <div className="bot-avatar">
                                {/* SVG icon */}
                            </div>
                        )}
                        <div className="message-content">
                            <p>{msg.text}</p>
                        </div>
                    </div>
                ))}

                {/* Major options */}
                {majorOptions.length > 0 && !selectedOption && (
                    <div className="message bot">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content options">
                            {majorOptions.map(opt => (
                                <button key={opt.option_id} onClick={() => handleOptionSelect(opt)} className="option-btn">
                                    {opt.option_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Regions */}
                {regions.length > 0 && !selectedRegion && (
                    <div className="message bot">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content options">
                            {regions.map(r => (
                                <button key={r.region_id} onClick={() => handleRegionSelect(r)} className="option-btn">
                                    {r.region_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Beach types */}
                {beachTypes.length > 0 && !selectedType && selectedOption?.option_name.toLowerCase().includes('beach') && (
                    <div className="message bot">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content options">
                            {beachTypes.map(t => (
                                <button key={t.type_id} onClick={() => handleTypeSelect(t)} className="option-btn">
                                    {t.type_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Wildlife types */}
                {wildlifeTypes.length > 0 && !selectedType && selectedOption?.option_name.toLowerCase().includes('wildlife') && (
                    <div className="message bot">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content options">
                            {wildlifeTypes.map(t => (
                                <button key={t.type_id} onClick={() => handleTypeSelect(t)} className="option-btn">
                                    {t.type_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Adventure types */}
                {adventureTypes.length > 0 && !selectedType && selectedOption?.option_name.toLowerCase().includes('adventure') && (
                    <div className="message bot">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content options">
                            {adventureTypes.map(t => (
                                <button key={t.type_id} onClick={() => handleTypeSelect(t)} className="option-btn">
                                    {t.type_name}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Beaches list */}
                {beaches.length > 0 && (
                    <div className="message bot beaches-list">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content beaches">
                            {beaches.map(b => (
                                <div key={b.beach_id} className="chatbot-beach-card">
                                    <h3>{b.beach_name}</h3>
                                    {b.image_path && <img src={`/uploads/BeachPage/${b.image_path}`} alt={b.beach_name} className="chatbot-beach-image" />}
                                    <p>{b.description}</p>
                                    <a href={b.directions_url} target="_blank" rel="noopener noreferrer" className="directions-btn">
                                        Get Directions
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Wildlife places list */}
                {wildlifePlaces.length > 0 && (
                    <div className="message bot wildlife-list">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content wildlife-places">
                            {wildlifePlaces.map(w => (
                                <div key={w.wildlife_id} className="wildlife-card">
                                    <h3>{w.wildlife_name}</h3>
                                    {w.image_path && <img src={`/uploads/WildLifePage/${w.image_path}`} alt={w.wildlife_name} className="wildlife-image" />}
                                    <p>{w.description}</p>
                                    <a href={w.directions_url} target="_blank" rel="noopener noreferrer" className="directions-btn">
                                        Get Directions
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {/* Adventure places list */}
                {adventurePlaces.length > 0 && (
                    <div className="message bot adventure-list">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content adventure-places">
                            {adventurePlaces.map(a => (
                                <div key={a.adventure_id} className="adventure-card">
                                    <h3>{a.adventure_name}</h3>
                                    {a.image_path && <img src={`/uploads/adventurePage/${a.image_path}`} alt={a.adventure_name} className="adventure-image" />}
                                    <p>{a.description}</p>
                                    <a href={a.directions_url} target="_blank" rel="noopener noreferrer" className="directions-btn">
                                        Get Directions
                                    </a>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {isTyping && (
                    <div className="message bot typing-indicator">
                        <div className="bot-avatar">{/* SVG icon */}</div>
                        <div className="message-content">
                            <div className="typing-dots"><div></div><div></div><div></div></div>
                        </div>
                    </div>
                )}
            </div>

            <div className="chatbot-footer">
                <p>@Goa Beach Guide {new Date().getFullYear()}</p>
            </div>
        </div>
    );
}
