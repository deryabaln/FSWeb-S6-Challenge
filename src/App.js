import React, { useEffect, useState } from "react";
import axios from "axios";
import Karakter from "./components/Karakter";
import PaginationStyle from "./components/Pagination";
import Search from "./components/Search";
import Music from "./components/Music";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios.get("https://swapi.dev/api/people/?page=" + page)
      .then(res => {
        setData(res.data.results);
      });
  }, [page]);

  const handleChangePage = (e) => {
    setPage(e.target.textContent)
  };

  const getPreviousPage = (e) => {
    const newPage = page - 1;
    if (newPage >= 1) {
      setPage(newPage)
    }
  };
  const getNextPage = (e) => {
    const nextPage = page + 1;
    if (nextPage <= 5) {
      setPage(nextPage)
    }
  };
  const firstPage = (e) => {
    setPage(1)
  };
  const lastPage = (e) => {
    setPage(5)
  };

  return (
    <div className="App">
      <Music />
      <h1 className="Header">STAR WARS</h1>
      <Search data={data} setData={setData} />
      <Karakter data={data} />
      <PaginationStyle getPreviousPage={getPreviousPage} handleChangePage={handleChangePage} getNextPage={getNextPage} firstPage={firstPage} lastPage={lastPage} />
    </div>
  );
}

export default App;
