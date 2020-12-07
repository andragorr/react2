import React, {Component} from 'react';
import {users} from "./usersList/Users";
import UserComponent from "./compontents/UserComponent";

class App extends Component {
    render() {

        return (
            <div>
                {
                    users.map((user, index) => {
                        let cls = index %2 ? 'odd' : 'even';
                        return (
                            <UserComponent item={user} cls={cls} key={index}/>);
                    })
                }
            </div>
        );
    }
}

export default App;