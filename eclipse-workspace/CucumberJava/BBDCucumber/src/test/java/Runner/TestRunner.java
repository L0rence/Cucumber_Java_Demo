package Runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(
		features = {"/Users/chriselyn/eclipse-workspace/CucumberJava/BBDCucumber/Features"},
		glue = {"StepDefinitions"},
		monochrome = true,
		plugin = {"html:Reports\\HTMLReports","json:Reports\\JsonReports\\Cucumber.json","junit:Reports\\JunitReports\\Cucumber.xml"},
		dryRun = false,
		strict = true
		)


public class TestRunner {

	
	
}
