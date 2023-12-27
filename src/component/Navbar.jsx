import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import useApi from "../hooks/useApi";
import searchImages from "../hooks/apiSearch";

function Navbar() {
  const [search, setSearch] = useState("");
  const { setResponse, setLoadingState, setErrorState } = useApi();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!search) return;

    try {
      setLoadingState(true);
      const res = await searchImages(search);
      console.log(res);
      setResponse(res);
      console.log(search);
      navigate("/search");
      if (res.length === 0) setErrorState(true);
    } catch (err) {
      console.log(err);
    } finally {
      setLoadingState(false);
    }
  };

  return (
    <nav>
      <a href="/">Hello</a>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
      <ul>
        <a href="/">Home</a>
        <Link to="/about">About</Link>
        <Link to="/menu">Menu</Link>
      </ul>
    </nav>
  );
}

export default Navbar;
