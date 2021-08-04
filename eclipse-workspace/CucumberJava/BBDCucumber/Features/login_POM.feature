 
Feature: Login Mars
   
 
  Scenario Outline: Login functionality scenario
  Given user navigate to login page
  And user enter <username> and <password>
  When user clickOn the LoginButton
  Then user verify that home Page
Examples:
				 | username  									|  password  |
				 | marsQA.testQA@gmail.com    |  123123    |
				  
				 
				 