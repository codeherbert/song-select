import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song, favoriteTitle }) => {
    if(!song) {
        return <h3>Select a Song...</h3>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>Title: {song.title}</p>
            <p>Artist: {song.artist}</p>
            <p>Song duration: {song.duration}</p>
            <p><i><b>{song.title === favoriteTitle && 'FAVORITE!'}</b></i></p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong, favoriteTitle: state.songs.favoriteTitle };
}

export default connect(mapStateToProps)(SongDetails);