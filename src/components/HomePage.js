import React, {Component} from 'react';
import '../css/page.css';

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }

    render() {
        return (
            <div className="homePage">

            </div>
        )
    }
}

export default HomePage