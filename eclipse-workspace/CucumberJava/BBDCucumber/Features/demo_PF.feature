Feature: Login In Page

  Scenario: When valid creds are used should result in successful login
    Given I am at the login In page
    When I enter valid creds "admin" and "admin123"
    And I click the login button
    Then I should be logged in successfully

   
