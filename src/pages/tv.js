import React, { useCallback, useEffect, useMemo, useState } from "react";

function TvShows() {
  const [userData, setUserData] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setUserData(data))
      .catch((err) => console.error(err));
  }, []);
  //   const findLongestName = () => {
  //     let longestName = "";
  //     for (const { name } of comments) {
  //       if (name.length > longestName.length) {
  //         longestName = name;
  //       }
  //     }
  //     console.log("This is Computed");
  //     return longestName;
  //   };

  const getLongestName = useCallback(() => {
    let longestName = "";
    for (const { name } of userData) {
      if (name.length > longestName.length) {
        longestName = name;
      }
    }
    console.log("This is Computed");
    return longestName;
  }, [userData]);
  // const getLongestName = useMemo(() => {
  //   let longestName = "";
  //   for (const { name } of userData) {
  //     if (name.length > longestName.length) {
  //       longestName = name;
  //     }
  //   }
  //   console.log("This is Computed");
  //   return longestName;
  // }, [userData]);
  return (
    <div>
      <div>{getLongestName()}</div>
      {/* <div>{userData && findLongestName(userData)}</div> */}
      <div>
        <p>{count}</p>
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Increase Count
        </button>
      </div>
    </div>
  );
}

export default TvShows;

