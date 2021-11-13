import React, {Component} from 'react';
import { connect } from 'react-redux';

class SongList extends Component {
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button className="ui button primary">Select</button>
                    </div>
                    <div className="content">
                        <div><b>{song.title === this.props.favoriteTitle && 'FAVORITE!'}</b></div>
                    </div>
                </div>
            );
        });
    }

    render() {         
        return <div className="ui divided list">{this.renderList()}</div>
    }
}

const mapStateToProps = state => {
    console.log(state);
    return { songs: state.songs.songs, favoriteTitle: state.songs.favoriteTitle };
}

export default connect(mapStateToProps)(SongList);