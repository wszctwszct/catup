import React, {Component} from 'react';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconAssignment from 'material-ui/svg-icons/action/assignment';
import IconCalendar from 'material-ui/svg-icons/action/perm-contact-calendar';
import IconSettings from 'material-ui/svg-icons/action/settings';

/**
 * A simple example of `BottomNavigation`, with three labels and icons
 * provided. The selected `BottomNavigationItem` is determined by application
 * state (for instance, by the URL).
 */
class YMBottomNavigation extends Component {
    select = (index) => {
        this.props.select({
            selectedIndex: index
        });
    };

    render() {
        return (
            <Paper zDepth={1}>
                <BottomNavigation>
                    <BottomNavigationItem
                        label="事务"
                        icon={<IconAssignment/>}
                        onClick={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="日历"
                        icon={<IconCalendar/>}
                        onClick={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="设置"
                        icon={<IconSettings />}
                        onClick={() => this.select(2)}
                    />
                </BottomNavigation>
            </Paper>
        );
    }
}

export default YMBottomNavigation;