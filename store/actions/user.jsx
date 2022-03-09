export const addClip = ({ clip }) => ({
  type: 'ADD_CLIP',
  clip,
});

export const deleteClip = ({ clip }) => ({
  type: 'DELETE_CLIP',
  clip,
});
