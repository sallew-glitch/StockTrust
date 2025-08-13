import React, { ChangeEvent, useState, SyntheticEvent, FormEvent } from "react";

interface Props {
  onSearchSubmit: (e: SyntheticEvent) => void;
  search: string | undefined;
  handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<Props> = ({
  onSearchSubmit,
  search,
  handleSearchChange,
}: Props): JSX.Element => {
  return (
    <section className="relative bg-gray-100">
      <div className="max-w-4xl mx-auto p-6">
        <form
          className="flex flex-col w-full p-6 space-y-4 bg-blue-900 rounded-lg md:flex-row md:space-y-0 md:space-x-3"
          onSubmit={onSearchSubmit}
        >
          <input
            className="flex-1 p-3 rounded-lg border border-transparent focus:border-blue-400 focus:ring-2 focus:ring-blue-300 placeholder-gray-500 text-black focus:outline-none"
            id="search-input"
            placeholder="Search companies"
            value={search}
            onChange={handleSearchChange}
          />
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Search
          </button>
        </form>
      </div>
    </section>
  );
};

export default Search;
