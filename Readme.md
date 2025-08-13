# StockTrust

A full-stack financial web application built with **React** and **.NET 8 Web API** that delivers real-time data on popular US stocks via the **Financial Modeling Prep (FMP) API**.  
Track prices, view financial statements, and manage a personal portfolio — all in a fast, modern, and responsive UI.

> **Note:** Due to the free version of the FMP API, only a limited set of very popular US stocks is available (e.g., Apple, Tesla, Microsoft, NVIDIA, etc.).

> To get started, here are some popular US stock tickers you can search for:
- Apple → AAPL
- Tesla → TSLA
- Microsoft → MSFT
- NVIDIA → NVDA

>And an already registered user so you can view everything right away:
- Username: investor111
- Password: P@ssw0rd_111

---

## Features

-  **Real-time stock price updates** from the FMP API  
-  **Market capitalization** and key financial metrics  
-  **Detailed financial statements**:
  - Income Statement
  - Balance Sheet
  - Cash Flow Statement
  - Historical Dividends
-  **Personal Portfolio** — users can save favorite stocks to keep an eye on them  
-  **Stock search by ticker only** (e.g., `AAPL`, `TSLA`, `MSFT`, `NVDA`)  
-  **JWT-based authentication** for secure user sessions  
-  **Interactive charts** powered by Recharts  
-  **Modern tech stack** — React frontend, .NET backend, TypeScript, and Tailwind CSS

---

## Tech Stack

- **Frontend:** React, Tailwind CSS, TypeScript, Axios, Recharts  
- **Backend:** .NET 8 Web API, Entity Framework Core, MS SQL Server, JWT Authentication  
- **API:** [Financial Modeling Prep (FMP) API](https://site.financialmodelingprep.com/)  

---

## Installation

1. **Clone the repository**
    git clone https://github.com/sallew-glitch/StockTrust.git

2. **Install Dependencies**
    For Backend:
        cd api
        dotnet restore
    
    For Frontend:
        cd frontend
        npm install

3. **Add API keys**
    Generate API key from FMP (Financial Modeling Prep) and add here:
    For frontend:
        env -> REACT_APP_API_KEY

    For backend:
        appsettings.json -> FMPKey

4. **Run Project**
    For backend:
        dotnet watch run

    For frontend:
        npm start