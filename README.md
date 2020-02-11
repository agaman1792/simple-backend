## Building the project

#### 1. Get the source code - `git clone git@github.com:agaman1792/simple-backend.git`

#### 2. Install dependencies - `npm install`

#### 3. Infrastructure dependencies

You can also opt in using a database, in order to save bandwith and cache webservice data.

This is achieved by setting the *STORAGE_URL* configuration value in the environment file (.env).

#### 4. Create the environment file

Before running the server, adjust the environment variables to fit your setup, by creating the `.env` file, using the template `.env.example` file in the project's root directory.

We are doing this in order to protect sensitive data from being saved to source control

Configuration values:

* WEBSERVICE_CLIENTS_URL: Where we poll clients from (http service)
* WEBSERVICE_POLICIES_URL: Where we poll policies from (http service)
* SERVER_HOST
* SERVER_PORT
* STORAGE_URL: Url pointing to the mongo data source
* STORAGE_SYNC_INTERVAL: How often we synchronize data with the webservice

#### 5. Start the server - `npm start`


## Still to do

* Improve documentation
* Improve error handling (including failed datasource connection)
* Add types all around
* Add dependency injection
* Add linting
