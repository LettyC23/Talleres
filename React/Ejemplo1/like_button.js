'use strict';

const e = React.createElement;

class LikeButton extends React.Component{

    constructor(props){
        super(props);
        this.state = {liked: false}
    }

    render(){
        if(this.state.liked){
            return 'Ya le diste like.';
        }
        return e(
            'button', {onclick: () => this.setState({liked: true})}, 'like'
        );
    }
}

const domContainer = document.querySelector('#like_button_container');
ReactDOM.render(e(LikeButton), domContainer);