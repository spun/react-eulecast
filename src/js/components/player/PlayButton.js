var React = require('react');
var PlayerAction = require('../../actions/PlayerAction');

var PlayButton = React.createClass({

	handleClick: function () {
		if(this.props.isPlaying) {
			PlayerAction.pause();
		} else {
			PlayerAction.play();
		}
	}, 

    render: function () {
    	var button;
		if (this.props.isPlaying) {
			button = <svg className="player-play-button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
					    <path d="M0 0h48v48H0z" fill="none"/>
					    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-2 28h-4V16h4v16zm8 0h-4V16h4v16z"/>
					</svg>;
		} else {
			button = <svg className="player-play-button" xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
					    <path d="M0 0h48v48H0z" fill="none"/>
					    <path d="M24 4C12.95 4 4 12.95 4 24s8.95 20 20 20 20-8.95 20-20S35.05 4 24 4zm-4 29V15l12 9-12 9z"/>
					</svg>;
		}


		return (
			<div onClick={this.handleClick}>
				{button}
			</div>
		);
    }
});

module.exports = PlayButton;