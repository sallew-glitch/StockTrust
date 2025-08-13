import React, { SyntheticEvent } from "react";

interface Props {
  onPortfolioDelete: (e: SyntheticEvent) => void;
  portfolioValue: string;
}

const DeletePortfolio = ({ onPortfolioDelete, portfolioValue }: Props) => {
  return (
    <div>
      <form onSubmit={onPortfolioDelete}>
        <input type="hidden" value={portfolioValue} readOnly />
        <button
          title="Remove from portfolio"
          className="flex items-center justify-center w-10 h-10 text-white bg-red-500 rounded-full border border-red-500 hover:bg-white hover:text-red-500 transition-colors duration-200"
        >
          ✕
        </button>
      </form>
    </div>
  );
};

export default DeletePortfolio;
