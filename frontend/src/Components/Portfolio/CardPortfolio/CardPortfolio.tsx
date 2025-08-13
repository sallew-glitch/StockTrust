import React, { SyntheticEvent } from "react";
import { Link } from "react-router-dom";
import DeletePortfolio from "../DeletePortfolio/DeletePortfolio";
import { PortfolioGet } from "../../../Models/Portfolio";

interface Props {
  portfolioValue: PortfolioGet;
  onPortfolioDelete: (e: SyntheticEvent) => void;
}

const CardPortfolio = ({ portfolioValue, onPortfolioDelete }: Props) => {
  return (
    <div className="flex flex-col w-full p-6 space-y-4 rounded-lg shadow-md bg-white border border-gray-200 hover:shadow-lg transition-shadow duration-200 md:w-1/3">
      
      {/* Stock Symbol & Company Name */}
      <Link
        to={`/company/${portfolioValue.symbol}/company-profile`}
        className="text-2xl font-bold text-darkBlue hover:text-blue-700 transition-colors duration-200"
      >
        {portfolioValue.symbol}
      </Link>
      <p className="text-gray-600 text-sm">{portfolioValue.companyName}</p>

      {/* Purchase Price & Market Cap */}
      <div className="flex flex-col space-y-1 text-sm text-gray-800">
        <p>
          <span className="font-semibold text-gray-500">Purchase Price:</span>{" "}
          ${portfolioValue.purchase.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold text-gray-500">Market Cap:</span>{" "}
          ${portfolioValue.marketCap.toLocaleString()}
        </p>
      </div>

      {/* Delete Button */}
      <div className="pt-2">
        <DeletePortfolio
          portfolioValue={portfolioValue.symbol}
          onPortfolioDelete={onPortfolioDelete}
        />
      </div>
    </div>
  );
};

export default CardPortfolio;
