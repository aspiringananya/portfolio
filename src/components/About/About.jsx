import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about.gif';
import yoga from './../../assets/yoga.gif';
import artist from './../../assets/artist.gif';
import learner from './../../assets/learner.gif';
import music from './../../assets/music.gif';
import dance from './../../assets/dance.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Software Developer | Yoga enthusiast | Artist | Musician | Dancer | LifeLong Learner'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Software Developer</h3>
                    <p className='about-details'>
                        Learning is a never ending process and being a lifelong learner, I am always in the lookout for learning new technologies and 
                        implementing them to solve real world business problems.
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    {/* Sub section 2 */}
                    <h3 className='about-sub-head'>Yoga enthusiast</h3>
                    <p className='about-details'>
                        Beat the stress using Suryanamaskara unleasing my happy hormones that keeps me recharged throughout the day.
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    {/* Sub section 3 */}
                    <h3 className='about-sub-head'>Artist</h3>
                    <p className='about-details'>
                        Painting is a great way to vent out emotions and shoo away stress.
                        It brings out the creative side of me , love to draw human sketches and portraits.
                       
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    {/* Sub section 4 */}
                    <h3 className='about-sub-head'>Musician</h3>
                    <p className='about-details'>
                        Trained in vocal classical music , a music lover !
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    {/* Sub section 5 */}
                    <h3 className='about-sub-head'>Dancer</h3>
                    <p className='about-details'>
                       A trained Bharatnatyam dancer ! What could be a better than to shake a leg to beat those Monday blues...
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    {/* Sub section 6 */}
                    <h3 className='about-sub-head'>Life Long Learner</h3>
                    <p className='about-details'>
                        I always look out for learning a new skill - be it swimming/ Zumba/ cooking a new dish / running Marathons or experimenting with a new tech skill.
                       
                    </p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>
                    <p></p>

                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
                        alt='animation'
                        className='about-anime'
                    />
                    <img
                        src={yoga}
                        alt='animation'
                        className='about-anime'
                    />
                    <img
                        src={artist}
                        alt='animation'
                        className='about-anime'
                    />
                    <img
                        src={music}
                        alt='animation'
                        className='about-anime'
                    />
                    <img
                        src={dance}
                        alt='animation'
                        className='about-anime'
                    />
                    <img
                        src={learner}
                        alt='animation'
                        className='about-anime'
                    />
                </div>
            </div>

            <FooterLink
                phrase='Check out my '
                link='projects!'
                toAdress='/projects'
            />
            {/* Vector Frame! */}
            <div className='vector-frame'>
                <img src={aboutVector} className='about-vector' alt='about' />
            </div>
        </div>
    );
};

export default About;
