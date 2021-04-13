import React, { useState, useEffect } from "react";
import FriendItem from "../FriendItem/FriendItem";
import "./FriendsList.css";
import Pagination from "../Pagination/Pagination";

export default function FriendsList(props) {
  let [friendsList, setFriendsList] = useState([]);
  const [searchResult, setSearchResult] = useState({});
  let [inputValue, setInputValue] = useState("");
  const friendsPerPage = 4;
  const totalPages = Math.ceil(friendsList.length / friendsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  function inputChangeHandler(e) {
    setInputValue(e.target.value);
  }
  function addFriend(e) {
    if (e.key === "Enter" && inputValue !== "") {
      setFriendsList((prevList) => [
        ...prevList,
        { name: inputValue, isFavourite: false },
      ]);
    }
  }

  function removeFriend(friendName) {
    setFriendsList((prevList) =>
      prevList.filter((friend) => friend.name !== friendName)
    );
  }

  function markFavourite(friendName) {
    setFriendsList((prevList) => {
      const updatedFriendsList = [...prevList];
      for (let i = 0; i < updatedFriendsList.length; i++) {
        if (updatedFriendsList[i].name === friendName) {
          updatedFriendsList[i].isFavourite = !updatedFriendsList[i]
            .isFavourite;
          break;
        }
      }
      console.log(updatedFriendsList);
      return updatedFriendsList;
    });
  }
  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }
  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  const getPaginatedData = () => {
    const startIndex = friendsPerPage * (currentPage - 1);
    const endIndex = startIndex + friendsPerPage;
    return friendsList.slice(startIndex, endIndex);
  };
  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  function searchFriend() {
    let searchRes = {};
    for (let i = 0; i < friendsList.length; i++) {
      if (friendsList[i].name === inputValue) {
        searchRes = friendsList[i];
        break;
      }
    }
    setSearchResult(searchRes);
  }

  function sortRatings() {
    setFriendsList((prevList) => {
      let sortedList = [];
      for (let i = 0; i < prevList.length; i++) {
        if (prevList[i].isFavourite) {
          sortedList.push(prevList[i]);
        }
      }
      for (let i = 0; i < prevList.length; i++) {
        if (!prevList[i].isFavourite) {
          sortedList.push(prevList[i]);
        }
      }
      return sortedList;
    });
  }

  useEffect(() => {
    setInputValue("");
    setSearchResult({});
  }, [friendsList.length]);

  useEffect(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  return (
    <>
      <div className='col-md-4 mainDiv'>
        <input
          className='col-md-10'
          onKeyPress={addFriend}
          onChange={inputChangeHandler}
          value={inputValue}
          placeholder="Enter your friend's name"
        />
        <button onClick={searchFriend} className='btn-search col-md-1'>
          <i class='fas fa-search'></i>
        </button>
        <button className='btn-sort col-md-1' onClick={sortRatings}>
          <i class='fas fa-sort'></i>
        </button>
        {Object.keys(searchResult).length === 0 && (
          <div>
            {getPaginatedData().map((friend) => {
              return (
                <FriendItem
                  key={friend.name}
                  name={friend.name}
                  removeFriend={removeFriend}
                  markFavourite={markFavourite}
                  isFavourite={friend.isFavourite}
                />
              );
            })}
          </div>
        )}
        {Object.keys(searchResult).length > 0 && (
          <div>
            <FriendItem
              name={searchResult.name}
              removeFriend={removeFriend}
              markFavourite={markFavourite}
              isFavourite={searchResult.isFavourite}
            />
          </div>
        )}
      </div>
      <Pagination
        goToNextPage={goToNextPage}
        goToPreviousPage={goToPreviousPage}
        totalPages={totalPages}
        currentPage={currentPage}
        changePage={changePage}
      />
    </>
  );
}
