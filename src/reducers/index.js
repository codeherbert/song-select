import { combineReducers } from 'redux';

const songsReducer = () => {
    return {
    songs:[       
        { title: "Adventure of a Lifetime", artist: "Coldplay", duration: "3:43" }, 
        { title: "Go On", artist: "Jack Johnson", duration: "4:35" },        
        { title: "Counting Stars", artist: "OneRepublic", duration: "4:19" },
        { title: "Sometimes You Can't Make It On Your Own", artist: "U2", duration: "4:51" }
    ],
    favoriteTitle: "Go On"
    }
}

const selectedSongReducer = (selectedSong=null, action) => {
    if(action.type === "Song_Selected") {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});