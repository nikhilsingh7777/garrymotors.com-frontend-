import React from 'react'
import styles from "./Search.module.css"
const Search = ({ onSearch }) => {
    const handleInputChange = (e) => {
        onSearch(e.target.value);
      };
    return (
        <div className={styles.search}>
            <input type="text" placeholder='Browse our Collection' onChange={handleInputChange} />
            <div className={styles.sicon}>
                <svg xmlns="http://www.w3.org/2000/svg" width="2.3em" height="2.3em" viewBox="0 0 24 24"><path fill="currentColor" d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7" /></svg>
            </div>
        </div>
    )
}

export default Search