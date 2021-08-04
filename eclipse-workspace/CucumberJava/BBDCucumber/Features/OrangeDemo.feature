Feature: Title of your Orange HRM

  Scenario: Title of your Orange HRM scenario
    Given navigate to Orange Hrm application
    And enter "admin" and "admin1234"
    When I click on login button
    Then login successful

  Scenario Outline: Title of your Orange HRM scenario12
    Given navigate to Orange Hrm application
    And user <email> and <pass>
    When I click on login button

    Examples: 
      | email | pass      |
      | admin | admin1234 |
