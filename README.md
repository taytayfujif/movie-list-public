# Movie List

[Advanced] AWS, S3, Api-Gatway, Lambda, RDS, Serverless - Intro full stack project using amazon rds

## Objective
You will be creating a full stack application. A client will be able to make HTTP requests to a PostgreSQL database through Amazon RDS.

## Prerequisites
- Basic understanding of API's.
- Basic understanding of JSON.
- Basic understanding of AWS Lambda
- Basic understanding of Amazon S3
- Basic understanding of Amazon API-Gateway
- Basic understanding of Serverless & CLI
- Basic understanding of AWS CLI
- Basic understanding of PostgreSQL
- Basic understanding of HTTP Methods

## Setup
- Fork and Clone Repo
- Create serverless template 
- Create `package.json` file
- npm install `pg`
- npm install `pg-pool`


#### File Structure 
```
movie-list
|
+-- public
|    |
|    +-- edit
|    |   |
|    |   +-- edit.js
|    |   +-- edit.html
|    |   +-- edit.css
|    +-- post
|    |   |
|    |   +-- post.js
|    |   +-- post.html
|    |   +-- post.css
|    +-- index.html
|    +-- index.js
|    +-- index.css
+-- routes
|    |
|    +-- get.js
|    +-- post.js
|    +-- update.js
|    +-- delete.js
+-- test-data
|    +-- delete.json
|    +-- post.json
|    +-- update.json
+-- config.json
+-- node_modules
+-- .gitignore
+-- package-lock.json
+-- package.json
+-- serverless.yml
```
#### Connect to remote AWS RDS PostgreSQL 

- When connected to your database, create a table with the following columns:
  - movie_id
  - movie_title
  - movie_year_released
  - movie_genre
  

