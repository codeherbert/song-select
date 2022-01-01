import { combineReducers } from 'redux';

const songsReducer = () => {
    return {
    songs:[
        { title: "Sometimes You Can't Make It On Your Own", artist: "U2", duration: "4:51", video: "https://www.youtube.com/embed/DQZoxlBXBXA"},    
        { title: "Adventure of a Lifetime", artist: "Coldplay", duration: "3:43", video: "https://www.youtube.com/embed/QtXby3twMmI" }, 
        { title: "Go On", artist: "Jack Johnson", duration: "4:35", video: "https://www.youtube.com/embed/pLEx7IiE4vM" },        
        { title: "Counting Stars", artist: "OneRepublic", duration: "4:19", video: "https://www.youtube.com/embed/hT_nvWreIhg" }
        
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