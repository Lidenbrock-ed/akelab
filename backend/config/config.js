require('dotenv').config();

const config = {
	PORT: process.env.PORT,
	API_KEY: process.env.API_KEY
};

module.exports = config;