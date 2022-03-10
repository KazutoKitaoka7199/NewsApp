const initialState = {
  clips: [],
};

const reducer = (action, state = initialState) => {
  switch (action) {
    case 'ADD_CLIP':
      return {
        ...state,
        clips: [...state.clips, action.clip],
      };
    case 'DELETE_CLIP':
      return {
        ...state,
        clips: state.clips.filter((clip) => clip.url !== action.clip.url),
      };
    default:
      return state;
  }
};

export default reducer;
