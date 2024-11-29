import React, { useEffect, useState } from "react";

function GetApiData() {
  const [dataStarWars, setDataStarWars] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const getStarWars = async () => {
    setIsLoading(true);
    try {
      const data = await fetch("https://swapi.dev/api/people/");
      const result = await data.json();
      setDataStarWars(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStarWarsNext = async () => {
    if (dataStarWars?.next) {
      setIsLoading(true);
      try {
        const data = await fetch(dataStarWars.next);
        const result = await data.json();
        setDataStarWars(result);
      } catch (error) {
        console.error("Error fetching next page:", error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    getStarWars();
  }, []);

  return (
    <>
      {isLoading ? (
        <div>
          <span className="loading loading-dots loading-xs"></span>
          <span className="loading loading-dots loading-sm"></span>
          <span className="loading loading-dots loading-md"></span>
          <span className="loading loading-dots loading-lg"></span>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <button onClick={getStarWars} className="btn btn-primary mr-2">
            Refresh
          </button>
          <button
            onClick={getStarWarsNext}
            className={`btn btn-secondary ${!dataStarWars?.next ? "disabled" : ""}`}
          >
            Next
          </button>
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>No</th>
                <th>Name</th>
                <th>Height</th>
              </tr>
            </thead>
            <tbody>
              {dataStarWars?.results?.map((row, index) => (
                <tr className="bg-base-200" key={index}>
                  <td>{index + 1}</td>
                  <td>{row.name}</td>
                  <td>{row.height}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default GetApiData;
