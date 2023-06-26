
# Swap Market

Swap Market is the ultimate online marketplace where sustainability and affordability converge. Through this site you will discover a world where people can buy, sell, or swap their second-hand treasures, leading to reduced waste, saved money, and the thrill of finding unique gems.


## Installation

### Set up the backend

-Clone or download Swap_Market_server.

-Create a new database in MySQL called swap_market.

Run npm install from inside the server directory.

    $ npm install 

Run migrations

    $ npm run migrate

Run seeds

    $ npm run seed

Start the server:

    $ node server.js


### Set up the frontend

-Clone or download Swap_Market_client.

Install client dependencies:

Run npm install from inside the client directory.

    $ cd ../client
    $ npm install

Set environment variables:

Rename .env_sample to .env and change the placeholder value to the port you set for the server.

REACT_APP_API_URL=http://localhost:<PORT SET IN /server/.env>

Start the React app:

    $ npm run dev
    