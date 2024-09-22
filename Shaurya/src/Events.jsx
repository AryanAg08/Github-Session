import React from 'react'
import { useEffect } from 'react'
import './animation.css'
import { animations } from 'react-animations'
import AOS from 'aos'
import 'aos/dist/aos.css'
const Events = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [onscroll]);

    return (
        <>
            <div className='flx'>

                <div className='Event' data-aos="zoom-in">
                    <div className="box">
                        <img src='https://imgs.search.brave.com/liJ5f3psxXerpaFLEhqf3WE0kcA4vpViA-V_MnHWVFE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aXN0b2NrcGhvdG8u/Y29tL3Jlc291cmNl/cy9pbWFnZXMvUGhv/dG9GVExQL0hlYWx0/aGNhcmVNZWRpY2lu/ZS05NDQ4ODU0NjIu/anBn' alt="none" />
                    </div>
                    <h2>Jscop 3.0</h2>
                    <div className='desc'>A hackathon is a collaborative event where individuals, typically developers, designers, and entrepreneurs, come together to create innovative solutions to problems within a set time frame, usually between 24 to 72 hours. Participants form teams and work intensively on a project, often involving software development, hardware prototyping, or product design. Hackathons are not just limited to coding but also encourage creative and strategic thinking to solve real-world problems.</div>
                </div>
                <div className='Event' data-aos="fade-up">
                    <div className="box">
                        <img src='https://imgs.search.brave.com/y6viaEh1NVE7o-txDVNI2eJtOybKRfBRwXaSo7JG6nk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTAw/ODQ5NjA2Ni9waG90/by9lbnRodXNpYXN0/aWMtaGFja2Vycy1j/b2RpbmctZm9yLWNo/YXJpdHktYXQtaGFj/a2F0aG9uLmpwZz9z/PTYxMng2MTImdz0w/Jms9MjAmYz1CLVFZ/X29HZDRzdUgtX2hk/aEdaX0lYeklIUGZJ/ekc2RWwzOTExUXE4/ZUJzPQ' alt="none" />
                    </div>
                    <h2>Jscop 4.0</h2>
                    <div className='desc'>A hackathon is a collaborative event where individuals, typically developers, designers, and entrepreneurs, come together to create innovative solutions to problems within a set time frame, usually between 24 to 72 hours. Participants form teams and work intensively on a project, often involving software development, hardware prototyping, or product design. Hackathons are not just limited to coding but also encourage creative and strategic thinking to solve real-world problems.</div>
                </div>
            </div>
        </>
    )
}

export default Events
