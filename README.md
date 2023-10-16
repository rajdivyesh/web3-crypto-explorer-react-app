# web3-crypto-explorer-react-app
Consolidating RESTFUL calls from the CoinGecko API into a React application. I'll be using v3 of the API (the most recent version at the time of starting this project) This app will be using ant design for UI.
# Project Structure
Generated with `tree` command.
```
.
├── API
│   └── index.js
├── components
│   ├── App.css
│   ├── App.js
│   ├── Coins
│   │   ├── ReactTrendingCoins.js
│   │   └── ReactCoinsList.js
│   ├── General
│   │   ├── ReactAbout.js
│   │   └── ReactHome.js
│   ├── Global
│   │   └── ReactGlobal.js
│   └── Navigation
│       ├── ReactFooter.js
│       ├── ReactHeader.js
│       └── ReactSider.js
├── constants
│   └── index.js
├── images
│   ├── branding
│   │   └── CoinGecko.png
│   ├── flaticon
│   │   ├── 001-bitcoin.svg
│   │   ├── 001-chat.svg
│   │   ├── 002-bitcoin-1.svg
│   │   ├── 002-bitcoin.svg
│   │   ├── 003-bitcoin-2.svg
│   │   ├── 003-smartphone.svg
│   │   ├── 004-exchange.svg
│   │   ├── 005-idea.svg
│   │   ├── 006-binary.svg
│   │   └── worldwide.svg
│   └── logo
│       └── logo.png
├── index.js
├── redux_actions
│   └── index.js
├── redux_reducers
│   └── index.js
└── styles
    └── index.js
```

# Screenshots

**home**
![home](https://github.com/rajdivyesh/web3-crypto-explorer-react-app/blob/master/screenshots/home.png)

**about**
![about](https://github.com/rajdivyesh/web3-crypto-explorer-react-app/blob/master/screenshots/about.png)

**coins listing**
![coins listing](https://github.com/rajdivyesh/web3-crypto-explorer-react-app/blob/master/screenshots/coin_listing.png)

**coins listing**
![trending coins](https://github.com/rajdivyesh/web3-crypto-explorer-react-app/blob/master/screenshots/trending_coins.png)

**coins listing**
![exchange rate listing](https://github.com/rajdivyesh/web3-crypto-explorer-react-app/blob/master/screenshots/exchange_rates_listing.png)

# Project Overview

Our project is a React-based web application that provides comprehensive information about cryptocurrencies. The application is structured with modularity and maintainability in mind. Here's a breakdown of our project structure:

## 1. **Components**

### - **Coins Folder**
   - **`ReactCoinsList.js`**: This component displays a list of available cryptocurrencies with search and filter functionality.
   - **`ReactCoinsDetail.js`**: Provides detailed information about a specific cryptocurrency, including charts and market data.

### - **ExchangeRate Folder**
   - **`index.js`**: This component handles the display of BTC-to-Currency exchange rates.

### - **General Folder**
   - **`About.js`**: Contains information about the project.
   - **`Home.js`**: Represents the home page of the application.

### - **Navigation Folder**
   - **`Header.js`**: The header component containing navigation links and branding.
   - **`Footer.js`**: The footer component displays project information and contact details.
   - **`Sider.js`**: The sidebar component for navigating between different sections of the application.

### - **Constants Folder**
   - Contains constant values and configurations used across the application.

### - **Redux Actions and Reducers**
   - **`redux_actions`**: Contains Redux actions for fetching data from APIs.
   - **`redux_reducers`**: Contains Redux reducers for managing different parts of the application state.

### - **Styles Folder**
   - Contains CSS files and constants for styling the components.

## 2. **Key Features**

- **Cryptocurrency List**: Users can view a list of cryptocurrencies, filter them based on various criteria, and view detailed information for each coin.
- **Trending Cryptocurrencies**: The application highlights trending cryptocurrencies based on market cap rank.
- **Exchange Rates**: Users can view real-time BTC-to-Currency exchange rates.
- **Global Data**: Provides an overview of global cryptocurrency market statistics and ongoing/upcoming/ended ICOs.

## 3. **Technologies Used**

- **React**: Used for building the user interface components.
- **Redux**: Employed for state management, allowing efficient handling of application data.
- **React Router**: Enables seamless navigation within the application.
- **Ant Design**: Utilized pre-designed React components, ensuring a consistent and responsive user interface.

## 4. **Conclusion**

Our project presents a user-friendly interface for exploring the world of cryptocurrencies. The modular structure, powered by React and Redux, ensures scalability and ease of maintenance. It offers valuable insights into individual cryptocurrencies, market trends, and global statistics. If you have any specific questions or would like to see a demo of any feature, please feel free to let us know.

# Requirements (npm)
Requirements for this project can be found in the package.json. And can be installed with npm install from root of the project directory.

I aim to use the following packages: must have packages

- antd (ui framework for react)
- react (front-end)
- react-router-dom (routing for react)
- chartjs (charting library)
- axios (graceful api calls)
- redux (may need redux for state management if number of components grows)
- ant motion (animations for ant design ui)


# Sources
- [The CoinGecko API](https://www.coingecko.com/en/api#)
- [React documentation](https://reactjs.org/docs/getting-started.html)
- [Ant Design Documentation](https://ant.design/docs/react/introduce)

# Steps to reproduce

```sh
# install dependencies and start local server (make sure you have nvm and yarn installed beforehand)
nvm use
yarn
yarn start

# building
yarn build
```
