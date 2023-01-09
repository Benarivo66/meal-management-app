HOW TO RUN THIS APPLICATION

1. Install Postgres
  a. On MacOs we can install postgres with Homebrew by running the command `brew install postgresql`;
  b. We can start postgres by running `brew services start postgres`
  c. Update it by running `brew postgresql-upgrade-database`
  d. And stop it by running `brew services stop postgres`
  e. For other operating systems, please check the Postgres website - https://www.postgresql.org/download/.

2. Create Database
  a. Create a database with any name. 
  - We can do that by running `psql postgres` on the command line followed by for instance `CREATE DATABASE mealdb;`. Do not ignore the semicolon.
  - create USER, DATABASE and PASSWORD variables in a .env file to match the pg username, the pg database you intend to use and your pg password. Note the process.env variables in /meal-app/src/addonUserCategory/db/knexfile.ts file.

3. Clone the Repo and Install Dependencies
  a. Clone the repo
  b. Run `npm install` to install dependencies

4. Run the Migrations
  a. To run the migrations run `npm run migrate`. 3 migration files should be created.

5. Put on the Server
  a. Put the server on by running `npm run start:dev`

6. Run the manual tests on Postman - some examples are given below
  a. POST request on /brands/qwer65/addons with name, price, category, description
  b. POST request on /brands/1234gf/addons with name and price only
  c. POST request on /brands/1234gf/addons with name, category and description
  d. GET request on brands/1234gf/addons
  e. GET request on /brands/`${brandIdThatExists}`/addons/`${addonIdThatExists}`
  f. GET request on /brands/`${brandIdThatDoesNotExists}`/addons/`${addonIdThatExists}`
  g. GET request on /brands/`${brandIdThatExists}`/addons/`${addonIdThatDoesNotExists}`
  h. Similar pattern for PATCH and DELETE requests
  i. POST request on /brands/`${AnyIDAsIn(a-d)}`/addon-categories with name
  j. etc