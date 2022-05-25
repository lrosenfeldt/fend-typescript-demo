import { useQuery } from "@apollo/client";
import React, { useState } from "react";
import LoadingSpinner from "../components/loadingSpinner";
import ProgramCard from "../components/programCard";
import QueryError from "../components/queryError";
import { GET_ALL_PROGRAMS } from "../lib/queries";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");

  const { loading, error, data, refetch } = useQuery(GET_ALL_PROGRAMS);

  return (
    <>
      <header>
        <h1 className="text-4xl text-gray-50 font-bold py-8">Browse</h1>
      </header>
      <main>
        <div className="pb-8">
          <input
            className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            aria-label="Suche"
            id="search"
            placeholder="Suche"
            type="search"
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        {loading && <LoadingSpinner />}
        {error && (
          <QueryError refetch={refetch}>Failed ⛔️. Try Again?</QueryError>
        )}
        {data &&
          data.programs.map((program, index) => (
            <React.Fragment key={program.id}>
              <ProgramCard
                className={`gradient-${(index % 3) + 1}`}
                title={program.title}
              />
            </React.Fragment>
          ))}
      </main>
    </>
  );
};
export default Index;
