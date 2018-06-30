import React, {Component} from 'react';
import Calendar from 'material-ui/DatePicker/Calendar';
import '../css/page.css';

class CalendarPage extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    render(){
        return(
            <div className="calendarPage">
                <Calendar style={{width:'100%'}} firstDayOfWeek={1}/>
            </div>
        )
    }
}

export default CalendarPage