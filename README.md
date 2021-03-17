# Code_Quiz_DR
The quiz asks the player some code related questions and increases the score by one for each correct answer or decreases the time by 5 seconds if your answer is incorrect.

## Table of Contents
* [Introduction](#introduction)
* [Screenshot of the Quiz](#webpage)
* [Working of the Application](#web)
* [Installations](#installations)
* [Assignment details](#details)
* [Credits](#credits)

 ## Introduction 
 The quiz asks the player some code related questions. the questions are mainly based on Javascript techniques but it has been made using the concepts of HTML and CSS as well. the code quiz has 5 questions in total that needs to be answered. for each question, four options will be presented and the player has to select one option.Each correct answer increments your score by one and every incorrect answer decreases your working time by 5 seconds.This quiz is designed to play on a larger and a smaller screen format as well.
 
 
 ## Screenshot of the Quiz
 The screenshot of the Quiz looks almost similar to the one as shown here.

 
 ![Image](assets/Password_screenshot.png)
 
 ## Working of the Application
  The below shows video shows how the code will respond to __three__ different situations.
    __First__ being the onein which we enter the password length with is not between 8 and 128.
    __Second__ shows the generations of the password when all the conditions are termed OK.
    In the __third__ situation, a password is generated depending upon the conditions which have been accepted by the user.
 

![password](https://user-images.githubusercontent.com/77368913/110028466-47531a80-7d01-11eb-82c0-976ffdb104a2.gif)


 
 ## Installations
   * [The URL of the Github repo](https://github.com/Dipti2021/Password_Generator_DR)
   * [The URL of the deployed application](https://dipti2021.github.io/Password_Generator_DR/)
 
 ## Assignment Details
  The random password generator has been created using HTML, CSS and Javascript to code.The aaplication has been created keeping in mind the following conditions:
   * This application can be used to generate a random password between 8 and 128 characters.
   * It is upto the discretion of the user to choose how they want to construct their password. 
   * The password can be created using uppercase letters, lowercase letters, numeric characters, and special characters.
   * If the number entered by the user does not fall in the given range, then no password will be generated.
   * Depending upon the prompts chosen by the user, the password will be generated accordingly.

  *Keeping all these conditions in mind, I have created the Javascript code using the if, else if and else conditions to generate the required password.On generating a random string of characters, they were joined and presented as a password using functions like*  `.concat()`, `math.floor()` and `math.random()`
    
 
 ## Credits
    The homework has been assigned to me by the Carleton University Coding Bootcamp, our instructor and the TA's
