import React from 'react'
import "./About.css"

function About() {
  return (
    <div className='a'>
        <div className="a-left">
            <div className="a-cardbg"></div>
            <div className="a-card">
                <img  className='a-img' src="data:image/png;base64,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" alt="" />
            </div>
        </div>
        <div className="a-right">
            <h1 className='a-title'>About Me</h1>
            <p className='a-sub'>
            Motivated junior web developer looking for a role as full-stack web developer at SoftwareX. Passionate about building first-class web applications. Developed an e-commerce website for a local fashion retailer while at University X. Relevant skills include DNS Management, Database, Debugging, and more.
            </p>
            <div className="a-award">
                <img src="" alt="" className="a-award-image" />
            </div>
        </div>

      
    </div>
  )
}

export default About
