// Action creator
export const selectSong = (song) => {
    // Return an action
    return {
        type: 'Song_Selected',
        payload: song
    };
};

