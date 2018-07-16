import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <section id="footer">
                <ul className="icons">
                    <li><a href="https://github.com/luigimagdamitsoftware" className="icon alt fa-github"><span className="label">GitHub</span></a></li>
                    <li><a href="mailto:luigiantonmagdamit@gmail.com" className="icon alt fa-envelope"><span className="label">Email</span></a></li>
                </ul>
            </section>
        )
    }
}

export default Footer
