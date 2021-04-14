import React from "react";
import "./FriendItem.css";
const FriendItem = React.memo(
  ({ name, removeFriend, markFavourite, isFavourite }) => {
    return (
      <>
        <div className='row friend-row col-md-12'>
          <div className='col-md-6'>
            {name}
            <br />
            <span className='subscript'>is your friend</span>
          </div>
          <div className='col-md-6 buttonDiv'>
            <button
              type='button'
              className='btn btn-sm'
              onClick={() => markFavourite(name)}
            >
              {!isFavourite && <i className='far fa-star'></i>}
              {isFavourite && <i className='fas fa-star'></i>}
            </button>
            <button
              type='button'
              className='btn btn-sm'
              onClick={() => removeFriend(name)}
            >
              <i class='far fa-trash-alt'></i>
            </button>
          </div>
        </div>
      </>
    );
  },
  (prevProps, nextProps) =>
    prevProps.name === nextProps.name &&
    prevProps.isFavourite === nextProps.isFavourite
);
export default FriendItem;
