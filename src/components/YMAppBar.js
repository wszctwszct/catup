import React, {Component} from 'react';
import {AppBar,IconButton,FlatButton} from 'material-ui'
import {NavigationMenu} from 'material-ui/svg-icons';

class YMAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    LeftIconButtonClick=(e)=>{
        e.preventDefault();
    };
    render(){
        return(
            <AppBar
                title="Title"
                iconElementLeft={<IconButton><NavigationMenu /></IconButton>}
                iconElementRight={<FlatButton label="Save" />}
                onLeftIconButtonClick={this.LeftIconButtonClick}
            />
        )
    }
}
export default YMAppBar;