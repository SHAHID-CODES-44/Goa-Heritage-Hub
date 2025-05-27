import React from "react";
import "./BeachPage.css";

// main home img to be in bg so it looks appealing and not full page 80% page should be covered.
import mainimg from '../uploads/BeachPage/MainPage.png';

// this images for goa beaches listed below by division with the north and south ans also named them so place accordingly
import agonda from '../uploads/BeachPage/agonda.png';
import anjuna from '../uploads/BeachPage/anjuna.png';
import arambol from '../uploads/BeachPage/arambol.png';
import arossim from '../uploads/BeachPage/arossim.png';
import ashwen from '../uploads/BeachPage/ashwem.png';
import baga from '../uploads/BeachPage/baga.png';
import benaulim from '../uploads/BeachPage/benaulim.png';
import calangute from '../uploads/BeachPage/calangut.png';
import candolim from '../uploads/BeachPage/candolim.png';
import colva from '../uploads/BeachPage/colva.png';
import morjim from '../uploads/BeachPage/morjim.png';
import vagator from '../uploads/BeachPage/vagator.png';
import palolem from '../uploads/BeachPage/palolem.png';
import varca from '../uploads/BeachPage/varca.png';
import betalbatim from '../uploads/BeachPage/betalbatim.png';
import majorda from '../uploads/BeachPage/majorda.png';

// inside web features bottom three images should go.....
import choice from '../uploads/BeachPage/choice.png';
import roboicon from '../uploads/BeachPage/robo-icon.png';
import coconut from '../uploads/BeachPage/coconut.png';

// this is in bg of = explore more section.
import bottomimg from '../uploads/BeachPage/bottomimg.png';

const BeachPage = () => {
    return (
        <>
            <div className="beach-container">
                <div className="beach-navbar">
                    <img src="" alt="Goa Beaches Logo" id="Bpagelogo" />
                    <div className="beach-nav-txt">
                       <a href="/"><p>Home</p></a> 
                        <p>Adventures</p>
                        <p>Beaches</p>
                        <p>Taste & Rest</p>
                        <p>Wild Life</p>
                        <a href="/Feedback"><p>Feedback</p></a>
                    </div>
                    <a href="/SignupIn"><button>Signup</button></a>
                </div>
                
                <div className="middle-content">
                    <h1>Welcome to the Shore of Goa</h1>
                    <h2>Enjoy your Vacations</h2>
                    <button>Get Suggestions</button>
                </div>
                
                <div className="qoutes">
                    <h1>Explore Below</h1>
                    <h3>The tans will fade, but the memory will last forever</h3>
                    <h3>susegad - The goan way of life</h3>
                    <button>↓</button>
                </div>
                
                <div className="web-features">
                    <div>
                        <img src={roboicon} alt="Chatbot Support" id="robo-icon" />
                        <p>Chatbot Support</p>
                    </div>
                    <div>
                        <img src={coconut} alt="Top Listed" id="coconut-tree" />
                        <p>Top listed</p>
                    </div>
                    <div>
                        <img src={choice} alt="User Choice" id="choices" />
                        <p>User choice</p>
                    </div>
                </div>
                
                <div className="beaches-listed-container">
                    <div className="north-goa">
                        <h1>North Goa</h1>
                        <div className="beach-card-container">
                            <div className="b1">
                                <img src={baga} alt="Baga Beach" id="baga" />
                                <div className="beach-card-content">
                                    <p>1. Baga Beach</p>
                                    <p>Party central with beach clubs like Tito's & Mambo's. Offers water sports (jet skiing, parasailing).</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b2">
                                <img src={calangute} alt="Calangute Beach" id="calangute" />
                                <div className="beach-card-content">
                                    <p>2. Calangute Beach</p>
                                    <p>The "Queen of Beaches" – biggest and most popular. Great for sunbathing and beach shopping.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b3">
                                <img src={anjuna} alt="Anjuna Beach" id="anjuna" />
                                <div className="beach-card-content">
                                    <p>3. Anjuna Beach</p>
                                    <p>Known for its hippie vibe. Famous for its Wednesday flea market. Beautiful sunset views with rocky shores.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b4">
                                <img src={vagator} alt="Vagator Beach" id="vagator" />
                                <div className="beach-card-content">
                                    <p>4. Vagator Beach</p>
                                    <p>Near Chapora Fort ("Dil Chahta Hai" spot). Paragliding and dramatic cliff-side views.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b5">
                                <img src={arambol} alt="Arambol Beach" id="arambol" />
                                <div className="beach-card-content">
                                    <p>5. Arambol Beach</p>
                                    <p>Chill, bohemian vibe. Known for drum circles and yoga. Sweet Water Lake nearby.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b6">
                                <img src={morjim} alt="Morjim Beach" id="morjim" />
                                <div className="beach-card-content">
                                    <p>6. Morjim Beach</p>
                                    <p>Known as "Little Russia" due to many Russian tourists. Olive Ridley turtle nesting site.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b7">
                                <img src={ashwen} alt="Ashwem Beach" id="ashwem" />
                                <div className="beach-card-content">
                                    <p>7. Ashwem Beach</p>
                                    <p>Quiet and scenic, often preferred by foreigners. Upscale beach resorts and palm-lined sands.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b8">
                                <img src={candolim} alt="Candolim Beach" id="candolim" />
                                <div className="beach-card-content">
                                    <p>8. Candolim</p>
                                    <p>Clean and relatively peaceful. Popular for water sports & dolphin spotting.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="south-goa">
                        <h1>South Goa</h1>
                        <div className="beach-card-container">
                            <div className="b9">
                                <img src={palolem} alt="Palolem Beach" id="palolem" />
                                <div className="beach-card-content">
                                    <p>9. Palolem Beach</p>
                                    <p>Crescent-shaped beach known for its calm waters and vibrant beach huts.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b10">
                                <img src={agonda} alt="Agonda Beach" id="agonda" />
                                <div className="beach-card-content">
                                    <p>10. Agonda</p>
                                    <p>Serene beach ideal for relaxation and turtle nesting sites.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b11">
                                <img src={colva} alt="Colva Beach" id="colva" />
                                <div className="beach-card-content">
                                    <p>11. Colva</p>
                                    <p>One of the oldest and most popular beaches, bustling with activities.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b12">
                                <img src={benaulim} alt="Benaulim Beach" id="Benaulim" />
                                <div className="beach-card-content">
                                    <p>12. Benaulim</p>
                                    <p>Tranquil beach known for its fishing community and peaceful ambiance.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b13">
                                <img src={varca} alt="Varca Beach" id="varca" />
                                <div className="beach-card-content">
                                    <p>13. Varca</p>
                                    <p>Quiet beach with white sands, popular among tourists seeking solitude.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b14">
                                <img src={betalbatim} alt="Betalbatim Beach" id="Betalbatim" />
                                <div className="beach-card-content">
                                    <p>14. Betalbatim</p>
                                    <p>Also known as Sunset Beach, famous for its picturesque sunsets.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b15">
                                <img src={majorda} alt="Majorda Beach" id="majorda" />
                                <div className="beach-card-content">
                                    <p>15. Majorda</p>
                                    <p>Beach with soft sands and a relaxed atmosphere, known for its bakeries.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                            
                            <div className="b16">
                                <img src={arossim} alt="Arossim Beach" id="Arossim" />
                                <div className="beach-card-content">
                                    <p>16. Arossim</p>
                                    <p>Pristine beach with golden sands, ideal for peaceful walks.</p>
                                    <button>Directions</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="explore-more">
                        <img src={bottomimg} alt="Beach Background" id="bgimg-explore-more" />
                        <h1>What type of beach you want to go?</h1>
                        <button>Get Suggestions</button>
                    </div>
                    
                    <div className="beach-footer">
                        <div>
                            <h4>Explore Goa</h4>
                            <ul>
                                <li>Beaches</li>
                                <li>Chilling Spots</li>
                                <li>Adventures</li>
                                <li>Ask Robo</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4>Contact Us</h4>
                            <ul>
                                <li>Tisk, Usgao GOa</li>
                                <li>shahidfirzaba@gmail.com</li>
                                <li>7249280617</li>
                                <li>About me</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4>Quick Links</h4>
                            <ul>
                                <li>About us</li>
                                <li>Blog</li>
                                <li>FAQs</li>
                                <li>Terms & Conditions</li>
                                <li>Privacy Policy</li>
                            </ul>
                        </div>
                        
                        <div>
                            <h4>Follow us</h4>
                            <ul>
                                <li>Facebook</li>
                                <li>Instagram</li>
                                <li>Twitter</li>
                                <li>Youtube</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BeachPage;