 
Feature: Test the login functionality of Orange HRM application

  
  Scenario: Test the valid login using Datatable
    Given navigate to Orange Hrm application	
    When user enters valid credentials using dataTable
    |admin|admin123|
     When I click on login button
    Then login successful

   