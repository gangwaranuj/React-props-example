import React from 'react';
import ReactDOM from 'react-dom';



const url = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxMWDBZWnKV-HtNRkhXu_gALmdLpd31aLtMd9QcJoHwg0dWaV00w';

const imgsizeInfo = {

    small: {
        height: '100px',
        width: '100px'
    },
    med: {
        height: '200px',
        width: '200px'
    },
    large: {
        height: '300px',
        width: '300px'
    }
}
console.log("imgsizeInfo ", imgsizeInfo);

class UserStyle extends React.Component {

    render() {
        let see = this.props.photostyle;
        console.log("size", see, imgsizeInfo[see])
        return <img src={url} style={imgsizeInfo[see]} />
    }
}
export default UserStyle