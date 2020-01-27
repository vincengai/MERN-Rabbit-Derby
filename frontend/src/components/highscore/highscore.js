import React from 'react';


class Highscore extends React.Component {
    constructor(props) {
        super(props);
    };

    componentDidMount() {
        if (this.props.type === "all") {
            this.props.fetchAllHighscores();
        } else {
            this.props.fetchUserHighscores(this.props.user.id);
        }
    }

    render() {
        return (
            <h1>Highscores</h1>
        );
    }
}

export default Highscore;