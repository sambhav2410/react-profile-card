export const userDataReducer = (state, action) => {
  const type = action.type;
  switch (type) {
    case "INITIAL_ADD":
      const returnState = action.payload.map((ele) => ({
        id: ele.id,
        name: ele.name,
        email: ele.email,
        phone: ele.phone,
        website: ele.website,
        imgSrc: `https://avatars.dicebear.com/v2/avataaars/${ele.username}.svg?options[mood][]=happy`,
        isLiked: false,
      }));
      return returnState;
    case "LIKE_BUTTON":
      const card_id = action.payload;
      return state.map((ele) =>
        ele.id === card_id ? { ...ele, isLiked: !ele.isLiked } : { ...ele }
      );
    case "DELETE":
      return state.filter((ele) => ele.id !== action.payload);

    case "EDIT":
      return state.map((ele) =>
        ele.id === action.payload.id ? { ...action.payload } : { ...ele }
      );
    default:
      return state;
  }
};
