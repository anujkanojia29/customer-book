# Project 
Backend API for Customer Book 

## Usage

Add PORT in "config/config.env" to run server on desired port

Update customers.json with the customer address data/

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev

# Run in prod mode
npm start
```

## API

To get customers data 

```
/api/v1/customers
```
To get customer addresses 

```
/api/v1/customers/:id/address
```