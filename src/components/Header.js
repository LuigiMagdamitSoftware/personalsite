import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-photo"></span>
                    <h1>I'm <strong>Luigi Magdamit</strong>. Software Developer,<br />
                    Web & Mobile App Designer,<a href="http://html5up.net"> photgrapher, and producer.</a>.</h1>
                    <p>Need photos for a photoshoot? Or an app? How about a website?<br />
                    I'm your guy. <strong>@luigiantonmagdamit@gmail.com</strong></p>
                    <ul className="actions">
                        <li><a href="#one" className="button scrolly">Let me show you!</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}

export default Header
