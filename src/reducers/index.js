import { combineReducers } from 'redux';

const songsReducer = () => {
    return [        
        { artist: "Jack Johnson", title: "Go On", duration: "4:35" },
        { artist: "Coldplay", title: "Adventure of a Lifetime", duration: "3:43" },
        { artist: "OneRepublic", title: "Counting Stars", duration: "4:19" },
        { artist: "U2", title: "Sometimes You Can't Make It On Your Own", duration: "4:51" }

    ];
};

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type="Song_Selected") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});