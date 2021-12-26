import React from 'react';
import { connect } from 'react-redux';

const SongDetails = ({ song, favoriteTitle }) => {
    if(!song) {
        return <h3>Select a Song...</h3>
    }

    return (
        <div>
            <h3>Details for:</h3>
            <p>Artist: {song.artist}</p>
            <p>Song duration: {song.duration}</p>
            <p><i><b>{song.title === favoriteTitle && 'FAVORITE!'}</b></i></p>
            <iframe width="560" height="315" src={song.video} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
    )
}

const mapStateToProps = (state) => {
    return { song: state.selectedSong, favoriteTitle: state.songs.favoriteTitle };
}

export default connect(mapStateToProps)(SongDetails);
