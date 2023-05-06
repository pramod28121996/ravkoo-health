"use client";
import React, { useRef, useState } from "react";
import styles from "./page.module.css";

function ItemSearch() {
  const data = [
    { name: "Football" },
    { name: "Baseball" },
    { name: "Basketball" },
    { name: "iPod Touch" },
    { name: "iPhone 5" },
    { name: "Nexus 7" },
  ];

  //State declaration
  const [searchResult, setSearchResult] = useState(data);

  //Function calling
  const handleOnChange = (e) => {
    const { value } = e.target;
    if (value === "") setSearchResult([...data]);
    else {
      setSearchResult([...data].filter((item) => item.name.includes(value)));
    }
  };

  return (
    <div>
      <label htmlFor="search">Search:</label>
      <input
        type="text"
        id="search"
        placeholder="search by name"
        onChange={handleOnChange}
      />
      <table border={"2"}>
        <tr>
          <th>Name</th>
        </tr>
        {searchResult.map((item, index) => (
          <tr key={item.name + index}>
            <td>{item.name}</td>
          </tr>
        ))}
        {searchResult.length === 0 && (
          <tr>
            <td>No result found</td>
          </tr>
        )}
      </table>
    </div>
  );
}

export default ItemSearch;
