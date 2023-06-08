import React from 'react'
import { Button } from 'antd'
import FullCalendar from '@fullcalendar/react' // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid' // a plugin!
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from '@fullcalendar/timegrid';
import { useNavigate } from 'react-router-dom';

function renderEventContent(eventInfo) {
    return (
        <div>
            <p>{eventInfo.event.title}</p>
            {/* <img style={{width: "-webkit-fill-available"}} src={eventInfo.event.url} /> */}
        </div>
    )
}

export default function Calendar() {
    const navigate = useNavigate()
    return (
        <>
            <div className='calendar-btn'>
                <Button
                    onClick={() => navigate("/calendar/calendarEventDetails")}
                >
                    <i className="fa-solid fa-plus mr-1"></i>
                    Add Event
                </Button>
            </div>
            <div className="calendar-container">
                <FullCalendar
                    plugins={[dayGridPlugin, interactionPlugin, listPlugin, timeGridPlugin]}
                    initialView="dayGridMonth"
                    headerToolbar={{
                        left: "prev,next today",
                        center: "title",
                        right: "dayGridMonth, timeGridWeek ,timeGridDay",
                    }}
                    eventContent={renderEventContent}
                    events={[
                        { title: 'event 1', date: '2023-06-13', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/2011_Range_Rover_--_12-31-2010.jpg/1200px-2011_Range_Rover_--_12-31-2010.jpg" },
                        { title: 'event 2', date: '2020-06-02', url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/2011_Range_Rover_--_12-31-2010.jpg/1200px-2011_Range_Rover_--_12-31-2010.jpg" }
                    ]}
                />
            </div>
        </>
    )
}
