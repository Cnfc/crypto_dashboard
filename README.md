Crypto Dashboard 

# Route
1. Settings Page with a list of Coins.

  - Greeting the user on first visit, asking them to choose their favorites.
  - Providing a default 10 coins as favorites & a complete list of all coins.
  - Searching for coins with fuzzy search.
  - Hovering and Selecting coins.
  - Adding/Removing coins on the list of favorites.
  - Disabling out chosen coins.
  - Confirm Favorite Coin.
  - Remembers those values for the user in LocalStorage.
  - Generates dashboard prices & historical data. 

2. Dashboard.

  - Data initializes from remembered favorites, or forwards to Settings page.
  - Displays 5 major Cards for first 5 favorites and compact Cards for next 5.
  - Renders a line chart for the 10 historical points on current favorite symbol.
  - Select coins changes and re-fetch data, remembers current favorite.
  - Select to render historical points on Date: Days, Weeks, Months.
  - Display name and image of coin next to chart.