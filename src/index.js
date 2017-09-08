import React from 'react';
// import React from 'Component';
import ReactDOM from 'react-dom';
import './index.css';
import UserStyle from './UserStyle.js';
 import App from './main.js';

/* component  
    as 
    function   
*/

// let Person = () => {
//     return <label>Hello sdafads</label>;
// }

/* component  
    as 
    class
*/

const user = {
    name: 'anuj'
}

class Person extends React.Component {

    render = () => {
        const name = this.props.person.name;
        return (
            <div>
                <UserStyle photostyle="large" />

                <br></br>
                <App />
                <b>
                    <label>Hello {name} !</label>
                </b>
            </div>
        )
    }
}
ReactDOM.render(<Person person={user} />, document.getElementById('root'));
