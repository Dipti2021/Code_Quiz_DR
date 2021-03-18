# Code_Quiz_DR
The quiz asks the player some code related questions and increases the score by one for each correct answer or decreases the time by 5 seconds if your answer is incorrect.

## Table of Contents
* [Introduction](#introduction)
* [Screenshot of the Quiz](#webpage)
* [Working of the Application](#web)
* [Installations](#installations)
* [Pseudocode](#details)
* [Special Features](#features)
* [Credits](#credits)

 ## Introduction 
 The quiz asks the player some code related questions. the questions are mainly based on Javascript techniques but it has been made using the concepts of HTML and CSS as well.The code quiz has 5 questions in total that needs to be answered. for each question, four options will be presented and the player has to select one option.Each correct answer increments your score by one and every incorrect answer decreases your working time by 5 seconds.This quiz is designed to play on a larger and a smaller screen format as well.
 
 
 ## Screenshot of the Quiz
 The screenshot of the Quiz looks almost similar to the one as shown here.

 
 ![Image](Assets/IMG_1771.JPG)
 
 ## Working of the Application
 

![quiz](Assets/quiz%20maker.gif)


The working of the code quiz has been divided into the following parts:

PAGES | FUNCTIONS
------------ | -------------
LANDING PAGE |The quiz asks the player some code related questions. The questions are mainly based on Javascript techniques but it has been made using the concepts of HTML and CSS as well. We start the quiz by clicking the "Begin" button on the landing page along with the data that displays the remaining time and score points accumulated as the quiz progresses.
QUESTIONS PAGE | Once the quiz is started, the user is presented with a question, along with 4 possible answers.For each question, 4 options will be presented and the player has to select the correct option.Each correct answer increments your score by one and every incorrect answer decreases your working time by 5 seconds.
LAST PAGE | Once the user reaches the last question,after clicking an option for it his/her final score is displayed along with a finished prompt. Also, the player is asked to enter their initials in order to store their score. If the initials are anything else but alphabets, then he is prompted to enter the correct initials.The current and all the previous scores are stored in the local storage after clicking the Submit button.This list of saved scores can be seen by clicking the "View High Scores" button at any given time.

 
 ## Installations
   * [The URL of the Github repo](https://github.com/Dipti2021/Code_Quiz_DR)
   * [The URL of the deployed application](https://dipti2021.github.io/Code_Quiz_DR/)
 
 ## Pseudocode 
   1. timer and score button are created that start at point 0
   2. Begin button is pressed in order to start the quiz.
   3. As soon as the quiz starts , the timer starts decrementing.
   4. Each question is presented on a new page.
   5. Choose one of the choice out of the 4 to finalise your answer.
   6. For every right or wrong answer, the player is notified.
   7. For correct answer score is added and for every wrong answer 5 seconds are deducted from the time.
   8. At theend, your score is displayed.
   9. All the past scores(if any) are also stores and they can be checkedat the end of the game or by clicking the Your Scores Button.
   10. The scores are stored in the local storage, on pressing the clear scores, the data gets deleted from the local storage a swell.


 ## Special Features:
The quiz has the following codes included
 * One HTML Page: index.html, which acts as a landing page for the quiz with all the necessary id's , classes, sectons et al mentioned
 * One CSS Page: style.css, which included a minimal styling required for the  html code
 * Two JS Pages: script.js and quiz.js, where the first file contains all the necessary declarations, conditions, storage formats and functions while the later has all the    set of questiond required to be answered

  All thhe js and css files are linked to the main html file

    
 
 ## Credits
    The homework has been assigned to me by the Carleton University Coding Bootcamp, our instructor and the TA's
