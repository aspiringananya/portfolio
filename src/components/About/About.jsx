import React from 'react';
import FooterLink from '../FooterLink/FooterLink';
import Header from '../Header/Header';
import aboutVector from './../../assets/about_vector.png';
import './About.css';
import aboutAnime from './../../assets/about_anime.gif';

const About = () => {
    return (
        <div className='section-container'>
            <Header
                heading='About Me.'
                details='Full stack Developer | Yoga enthusiast | Artist | Music Lover/ Singer | Trained Bharatnatyam dancer | LifeLong Learner'
            />

            <div className='about-main'>
                <div className='about-main-left'>
                    {/* Sub section 1 */}
                    <h3 className='about-sub-head'>Software Developer</h3>
                    <p className='about-details'>
                        Learning is a never ending process and being a lifelong learner, I am always in the lookout for learning new technologies and 
                        implementing them to solve real world business problems{' '}
                        <a
                            className='about-link-element'
                            href='https://github.com/aspiringananya'
                        >
                            my GitHub Repository!
                        </a>
                    </p>

                </div>

                <div className='about-main-right'>
                    <img
                        src={aboutAnime}
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
