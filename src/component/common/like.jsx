import React, { Component } from 'react'


const Like = props => {

    let likeClass = "fa fa-heart";
    if (!props.liked) likeClass +="-o";
    return (
       
       <i 
       onClick={props.onClick} 
       className={likeClass}
        aria-hidden="true"></i>
    );

}

export default Like;


// export default class Like extends Component {
 
//     state ={}

//     render() {
//         let likeClass = "fa fa-heart";
//         if (!this.props.liked) likeClass +="-o";
//         return (
           
//            <i 
//            onClick={this.props.onClick} 
//            className={likeClass}
//             aria-hidden="true"></i>
//         );
//     }
// }
