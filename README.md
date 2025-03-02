Educational Video Platform
==========================

Project Overview
This project aims to develop a YouTube-like platform dedicated to educational videos. The platform ensures that only high-quality,
approved educational content is available, maintaining relevance through manual checking by administrators. Additionally, 
it features a journey analyzer that provides a graphical representation of users' progress based on their viewing history.

Key Features
YouTube-like Platform: A platform for uploading, sharing, and viewing educational videos.

Approved Content Only: Only educational content approved by admins can be uploaded, ensuring quality and relevance.

Journey Analyzer: A visual representation of the user's progress based on their viewed content.

AI/ML Integration
The platform utilizes AI/ML libraries such as nltk and youtube_transcript_api to enhance video content analysis. Key functionalities include:

Video Transcript Fetching: Fetches transcripts from YouTube videos using youtube_transcript_api.

Text Summarization: Summarizes video transcripts by extracting key sentences using nltk.

Technologies Used
Frontend: React or Angular for building the UI.

Backend: Node.js with Express for handling server-side logic.

Database: MongoDB for storing video metadata and user progress.

AI/ML Libraries: nltk, youtube_transcript_api.

Backend Documentation By HM0040_Team-Tech-Trio


1. Database Configuration
The database configuration is handled by Sequelize, an ORM for Node.js.
File: backend/config/database.js

const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

module.exports = sequelize;

Explanation:
•	Sequelize Initialization: The Sequelize instance is initialized with database credentials and configuration options from environment variables.
o	DB_NAME: The name of the database.
o	DB_USER: The database user.
o	DB_PASS: The password for the database user.
o	DB_HOST: The host of the database.
o	dialect: The type of database being used (in this case, MySQL).

•	2. Environment Variables
•	The application uses environment variables to configure the database connection and server port.

File: backend/.env
DB_HOST=localhost
DB_USER=root
DB_PASS=Sneha@2727
DB_NAME=educational_videos
PORT=5000
Explanation:
•	DB_HOST: The host of the database.
•	DB_USER: The database user.
•	DB_PASS: The password for the database user.
•	DB_NAME: The name of the database.
•	PORT: The port on which the server will run.

•	3. Models
•	The models define the structure of the data and relationships in the database.
Unfortunately, I was unable to retrieve the 
files in the backend/models directory. 
