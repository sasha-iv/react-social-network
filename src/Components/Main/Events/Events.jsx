import React from "react";
import './Events.scss'
import calendar from "../../../images/calendar-icon.png"
import cake from "../../../images/cake-icon.png"
import '../Nav/Nav.scss'

const Events = (props) => {

    return(
        <div className={`events ${ props.customClass }`}>
            <h2>Events</h2>
            <div className='eventsItem'>
                <img src={calendar} alt='date'/>
                <span>You have 2 event invites</span>
            </div>
            <div className='eventsItem'>
                <img src={cake} alt='cake'/>
                <span>Today Maria Tor`s birthday</span>
            </div>
        </div>
    )
}
export default Events;