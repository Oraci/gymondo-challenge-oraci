## Assessment gymondo-challenge-oraci

I created 2 separate projects in the following folders:
 - Frontend
 - Backend

The link to clone the repository is: 

- git clone git@github.com:Oraci/gymondo-challenge-oraci.git

## `Frontend`

The frontend was created using react and typescript.

- Created a screen that presents the list of workouts, with the possibility to filter by start date and categories. Displays the paged list, maximum 20 workouts per page.

- Workout detail screen was created, with the possibility of returning to the workout list screen.

### `To run the frontend project`

In the project frontend directory, you should run:

 - yarn install
 - yarn start


### `Screenshots`

## `List screen`
![List](https://github.com/Oraci/gymondo-challenge-oraci/blob/master/frontend/src/assets/screenshots/home.png?raw=true)

## `Detail screen`
![Detail](https://github.com/Oraci/gymondo-challenge-oraci/blob/master/frontend/src/assets/screenshots/detail.png?raw=true)


 ## `Backend`

 The backend was created using node, express, sequelize and sqlite.

 - Created endpoint to store workout.
 - Created endpoint to list all workouts.
 - Created endpoint to list workouts by page.
 - Created endpoint to store category.
 - Created endpoint to list all categories.
 - I added the database file to this project to help them test the application.

 ### `To run the backend project`

In the project backend directory, you should run:

 - yarn install
 - yarn dev

&nbsp;
&nbsp;
&nbsp;
&nbsp;
## User Story

As a user, I want to see a list of workouts and their details so that I can choose one that best fits my schedule.

Acceptance Criterias

I can see a global header with an image logo
I can see a top bar with two filters: Start date and Category 
I can see a list of workouts
I see maximum of 20 workouts per page
I can see other workouts using the pagination component
I can click on one workout and be redirected to the Workout Detail Page
I can see a Workout Detail Page
On the Workout Detail Page I can see the fields: name, description, start date and category
On the Workout Detail Page I can come back to the Workout List Page from the Workout Detail Page

Technical details
In order to maintain low loading time of the app, it is necessary to send the contents in chunks. We would like to ask you to prepare a database with about 1000 workouts (please pollute them to reach a document size of ~10kb) and render a paginated list of the workouts.
These workouts should have at least four fields named:

Name:  type: String
description: type: String
startDate: type: Date
category: type: String
 allowedValues: ['c1', 'c2', 'c3', 'c4', 'c5', 'c6', 'c7']

The Workouts List Page should list the results and should have a top bar that allows you to filter workouts based on those two fields:

The startDate filter will show all months from today till the next 12 months. It should show only workouts where startDate month matches. The category filter should be multiple-choice, So, if c1 and c7 are selected, the list should be filtered and show workouts that have category either c1 or c7.

At the end of a list, there should be a pagination bar, indicating the total amount of workouts, page number, and pages in between. It should hide when results are less than page size (20).
When one item of the list is clicked, the user goes to the Workout Detail Page and sees all the fields of the workout.

Please use a NodeJs framework, React and Typescript or Javascript to implement your solution.
Please feel free to take your time to solve the problem and make assumptions where necessary.

After you have submitted your results (preferably as a Git repository), we will review your solution and come back with an update.

Should you have any questions, please do not hesitate to contact us.