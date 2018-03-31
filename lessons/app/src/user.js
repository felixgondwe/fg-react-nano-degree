import React, {Component} from 'react';

class User extends Component{
    state = { username: 'Tyler'}
}
render(){
    return (<p> Username: {this.state.user}</p>);
}

export default User;