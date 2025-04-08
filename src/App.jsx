import React, { useEffect, useState } from "react";
import axios from "axios";
import DeveloperCard from "./components/DeveloperCard";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";

// Optional: use UI input and button if you have them
// import Input from "./components/ui/Input";
// import Button from "./components/ui/Button";

const GITHUB_USERS_API = "https://api.github.com/users?since=0&per_page=100";

const DevConnect = () => {
  const [developers, setDevelopers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [sortAsc, setSortAsc] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const devsPerPage = 9;

  useEffect(() => {
    const fetchDevelopers = async () => {
      try {
        const res = await axios.get(GITHUB_USERS_API);
        setDevelopers(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDevelopers();
  }, []);

  const toggleDarkMode = () => setDarkMode((prev) => !prev);
  const toggleSort = () => setSortAsc((prev) => !prev);

  const filteredDevs = developers
    .filter((dev) => dev.login.toLowerCase().includes(search.toLowerCase()))
    .sort((a, b) =>
      sortAsc ? a.login.localeCompare(b.login) : b.login.localeCompare(a.login)
    );

  const indexOfLast = currentPage * devsPerPage;
  const indexOfFirst = indexOfLast - devsPerPage;
  const currentDevs = filteredDevs.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredDevs.length / devsPerPage);

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
        <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
        <div className="p-6">
          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4 text-white">
            <input
              type="text"
              placeholder="Search developers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-1/2"
            />

            <button
              onClick={toggleSort}
              className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
            >
              Sort: {sortAsc ? "A-Z" : "Z-A"}
            </button>
          </div>

          {/* Developer Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loading ? (
              <Loader count={9} />
            ) : (
              currentDevs.map((dev) => (
                <DeveloperCard key={dev.id} dev={dev} />
              ))
            )}
          </div>

          {/* Pagination */}
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalPages={totalPages}
          />
        </div>
      </div>
    </div>
  );
};

export default DevConnect;
