package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import Pages.loginPage_POM;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import net.bytebuddy.asm.Advice.Enter;

public class login_Step_definition_POM
{

	WebDriver driver;
	loginPage_POM loginObj;

	@Given("user navigate to login page") public void
	user_navigate_to_login_page() {
		System.out.println("++++++ I am inside login Demo Steps _ POM ");
		System.out.println("Browser Opened");
		WebDriverManager.chromedriver().setup(); driver = new ChromeDriver();
		driver.manage().window().maximize(); driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("http://localhost:5000/Home");

	}

	@Given("user enter (.*) and (.*)")
	public void user_entername_and_password(String username, String password)
	{ 
		loginObj = new loginPage_POM(driver); 
		loginObj.clickSignInLink();
		loginObj.enterEmailAddress(username);
		loginObj.enterpassword(password);

	}

	@When("user clickOn the LoginButton")
	public void user_click_on_the_login_button() { 
		loginObj.clickLoginBtn();
		}

	@Then("user verify that home Page") public void user_verify_that_home_page()
	{ driver.close(); driver.quit(); }



}
