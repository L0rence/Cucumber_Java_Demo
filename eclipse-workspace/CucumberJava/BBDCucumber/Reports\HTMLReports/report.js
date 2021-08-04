$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:OrangeDataTable.feature");
formatter.feature({
  "name": "Test the login functionality of Orange HRM application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Test the valid login using Datatable",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "navigate to Orange Hrm application",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRMSteps.navigate_to_Orange_Hrm_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid credentials using dataTable",
  "rows": [
    {
      "cells": [
        "admin",
        "admin123"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRMSteps.user_enters_valid_credentials_using_dataTable(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRMSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login successful",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRMSteps.login_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:OrangeDemo.feature");
formatter.feature({
  "name": "Title of your Orange HRM",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Title of your Orange HRM scenario",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "navigate to Orange Hrm application",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRMSteps.navigate_to_Orange_Hrm_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter \"admin\" and \"admin1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRMSteps.enter_email_and_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRMSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "login successful",
  "keyword": "Then "
});
formatter.match({
  "location": "OrangeHRMSteps.login_successful()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Title of your Orange HRM scenario12",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "navigate to Orange Hrm application",
  "keyword": "Given "
});
formatter.step({
  "name": "user \u003cemail\u003e and \u003cpass\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email",
        "pass"
      ]
    },
    {
      "cells": [
        "admin",
        "admin1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Title of your Orange HRM scenario12",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "navigate to Orange Hrm application",
  "keyword": "Given "
});
formatter.match({
  "location": "OrangeHRMSteps.navigate_to_Orange_Hrm_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user admin and admin1234",
  "keyword": "And "
});
formatter.match({
  "location": "OrangeHRMSteps.user_marsQA_testQA_gmail_com_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "OrangeHRMSteps.i_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.uri("file:demo_PF.feature");
formatter.feature({
  "name": "Login In Page",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "When valid creds are used should result in successful login",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am at the login In page",
  "keyword": "Given "
});
formatter.match({
  "location": "demo_Step_pf.i_am_at_the_login_In_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter valid creds \"admin\" and \"admin123\"",
  "keyword": "When "
});
formatter.match({
  "location": "demo_Step_pf.i_enter_valid_creds_and(String,String)"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat StepDefinitions.demo_Step_pf.i_enter_valid_creds_and(demo_Step_pf.java:44)\n\tat ✽.I enter valid creds \"admin\" and \"admin123\"(file:demo_PF.feature:5)\n",
  "status": "failed"
});
formatter.step({
  "name": "I click the login button",
  "keyword": "And "
});
formatter.match({
  "location": "demo_Step_pf.i_click_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should be logged in successfully",
  "keyword": "Then "
});
formatter.match({
  "location": "demo_Step_pf.i_should_be_logged_in_successfully()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:login_POM.feature");
formatter.feature({
  "name": "Login Mars",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login functionality scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to login page",
  "keyword": "Given "
});
formatter.step({
  "name": "user enter \u003cusername\u003e and \u003cpassword\u003e",
  "keyword": "And "
});
formatter.step({
  "name": "user clickOn the LoginButton",
  "keyword": "When "
});
formatter.step({
  "name": "user verify that home Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "marsQA.testQA@gmail.com",
        "123123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login functionality scenario",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user navigate to login page",
  "keyword": "Given "
});
formatter.match({
  "location": "login_Step_definition_POM.user_navigate_to_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enter marsQA.testQA@gmail.com and 123123",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "error_message": "cucumber.runner.AmbiguousStepDefinitionsException: \"user enter marsQA.testQA@gmail.com and 123123\" matches more than one step definition:\n  \"user (.*) and (.*)\" in OrangeHRMSteps.user_marsQA_testQA_gmail_com_and(String,String)\n  \"user enter (.*) and (.*)\" in login_Step_definition_POM.user_entername_and_password(String,String)\n\n\tat cucumber.runner.Glue.stepDefinitionMatch(Glue.java:101)\n\tat cucumber.runner.Runner.addTestStepsForPickleSteps(Runner.java:74)\n\tat cucumber.runner.Runner.createTestCaseForPickle(Runner.java:64)\n\tat cucumber.runner.Runner.runPickle(Runner.java:49)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:146)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:68)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:23)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:144)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:65)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:174)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:541)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:763)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:463)\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:209)\n",
  "status": "ambiguous"
});
formatter.step({
  "name": "user clickOn the LoginButton",
  "keyword": "When "
});
formatter.match({
  "location": "login_Step_definition_POM.user_click_on_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verify that home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "login_Step_definition_POM.user_verify_that_home_page()"
});
formatter.result({
  "status": "skipped"
});
});