import React from "react";
import Link from "gatsby-link";
import Helmet from "react-helmet";

import pic01 from '../assets/images/pic01.jpg'
import pic02 from '../assets/images/pic02.jpg'
import pic03 from '../assets/images/pic03.jpg'
import pic04 from '../assets/images/pic04.jpg'
import pic05 from '../assets/images/professional.jpg'
import austin from '../assets/images/austin.jpg'
import hotel from '../assets/images/hotel.jpg'
import river from '../assets/images/river.jpg'
class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={'Luigi Magdamit'} />

                <section id="two" className="main style2">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>A Short Introduction</h2>
                            </header>
                            <p>Hi, I'm Luigi. I specialize in many different skills, mediums and services. I'm mainly a software, web and mobile developer. You can also hire me for photographs, videos and editing, music production. If you're interested, feel free to contact me!</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit"><img src={pic05} alt="" /></span>
                        </div>
                    </div>
                </section>

                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>PHOTO GALLERY</h2>
                            </header>
                            <p>Want photos like these? Let me know!</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={austin} alt="" /></span>
                            <h3>PORTRAIT PHOTOGRAPHY</h3>
                            <p>Streetwear aficionado? Getting married? Whatever it is, let's capture those moments perfectly.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={hotel} alt="" /></span>
                            <h3>URBAN PHOTOGRAPHY</h3>
                            <p>Need some photos for your own website or social media? Let's give your future visitors a good idea of what there is to offer.</p>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={river} alt="" /></span>
                            <h3>AND SO MUCH MORE!</h3>
                            <p>Contact me for rates! I'm very flexible with time, and money, so let's make it happen in the smoothest and easiest way possible.</p>
                        </div>

                    </div>
                </section>

                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>SOFTWARE DEVELOPMENT</h2>
                        </header>
                        <header className="major">
                            <h2>Python</h2>
                        </header>
                        <header className="major">
                            <h2>JavaScript</h2>
                        </header>
                        <header className="major">
                            <h2>Java</h2>
                        </header>
                        <p>Here's Some Examples Of My Software Work, as Well As My Resume!</p>
                        <ul className="actions uniform">
                            <li><a href="https://github.com/luigimagdamitsoftware" className="button">GITHUB</a></li>
                            <li><a href="https://www.linkedin.com/in/luigi-magdamit" className="button">LINKEDIN</a></li>
                            <li><a href="https://www.linkedin.com/in/luigi-magdamit-21ba59149/detail/treasury/summary/?entityUrn=urn%3Ali%3Afs_treasuryMedia%3A(ACoAACPt2vcBHfuUQc7zL0npA2aYjP62cKsvlm4%2C1524797707004)&section=summary&treasuryCount=1" className="button">TECHNICAL RESUME</a></li>
                        </ul>
                    </div>
                </section>
                <section id="three" className="main style1 special">
                    <div className="grid-wrapper">
                        <div className="col-12">
                            <header className="major">
                                <h2>VIDEO GALLERY</h2>
                            </header>
                            <p>I also do videos and editing. Here's some of my work!</p>
                        </div>

                        <div className="col-4">
                            <span className="image fit"><img src={'https://i.ytimg.com/an_webp/v70KFhZlBmc/mqdefault_6s.webp?du=3000&sqp=CPvXr9oF&rs=AOn4CLDGwbZRyVctMLEgRFywzkkxIXCM_g'} alt="" /></span>
                            <h3>Travel Videos</h3>
                            <p>Travelling, or have travel footage? Get some editing on it, and voila.(Las Vegas Travel Video)</p>
                            <ul className="actions">
                                <li><a href="https://youtu.be/QhvGyHPPeHQ" className="button">Watch here</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={'https://i.ytimg.com/an_webp/8iDPNaE0dgs/mqdefault_6s.webp?du=3000&sqp=CPqTsNoF&rs=AOn4CLCjVWRMkJIlRc7n9L_-gBukyTm0pw'} alt="" /></span>
                            <h3>Short Films</h3>
                            <p>Need a short film, or a montage for an event? This is one I've done for a my old swim team.</p>
                            <ul className="actions">
                                <li><a href="https://youtu.be/-dFCW4JqaqI" className="button">Watch here</a></li>
                            </ul>
                        </div>
                        <div className="col-4">
                            <span className="image fit"><img src={'https://i.ytimg.com/an_webp/WcmiHxFeS0A/mqdefault_6s.webp?du=3000&sqp=CIDjr9oF&rs=AOn4CLCQXfOI764gUEk8OgSDcoQ1yKIpxw'} alt="" /></span>
                            <h3>And Everything Else</h3>
                            <p>Music videos, vlogs, you name it. You think it, and let's record it.</p>
                            <ul className="actions">
                                <li><a href="https://www.youtube.com/watch?v=WcmiHxFeS0A" className="button">Watch here</a></li>
                            </ul>
                        </div>

                    </div>
                    
                </section>
                <section id="four" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>Websites, Apps, Software, Photo and Video.</h2>
                        </header>
                        <p>You think it, I'll build it. Contact me for rates!</p>
                        <p><strong>EMAIL: luigiantonmagdamit@gmail.com</strong></p>
                        <p><strong>PHONE: 951-768-7416</strong></p>
                        <ul className="actions uniform">
                            <li><a href="mailto:luigiantonmagdamit@gmail.com" className="button special">Email</a></li>
                        </ul>
                    </div>
                </section>
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;