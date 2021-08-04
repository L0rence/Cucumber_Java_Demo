package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import PageFactory.demo_PF;
import Pages.loginPage_POM;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;

public class demo_Step_pf {

	WebDriver driver;
	demo_PF demoExpedia;
	
	@Given("I am at the login In page")
	public void i_am_at_the_login_In_page() {
		 System.out.println("Step :1 user is navigate to signin page");
	      WebDriverManager.chromedriver().setup();
		  driver = new ChromeDriver();
		  driver.manage().window().maximize();
		  driver.manage().deleteAllCookies();
		  driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		  driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		  driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login");   
		  
	}

//	@When("I enter valid creds (/.*/) and (/.*/)")
//	public void i_enter_valid_creds(String Username, String Password) {
////	     driver.findElement(By.xpath("//input[@id='signin-loginid']")).sendKeys("wefsfef");
////	     driver.findElement(By.xpath("//input[@id='signin-password']")).sendKeys("wefwer");
//		demoExpedia = new demo_PF(driver);
//		demoExpedia.enterUsername(Username);
//		demoExpedia.enterpassword(Password);
//	}
	
	@When("^I enter valid creds \"(.*)\" and \"(.*)\"$")
	public void i_enter_valid_creds_and(String uname, String pwd) {
		//demoExpedia = new demo_PF(driver);
		demoExpedia.enterUsername(uname);
 		demoExpedia.enterpassword(pwd);
	}


	@And("I click the login button")
	public void i_click_the_login_button() {
//	     driver.findElement(By.xpath("//button[@id='submitButton']")).click();
		demoExpedia.clickLogin();
	}

	@Then("I should be logged in successfully")
	public void i_should_be_logged_in_successfully() {
	    driver.close();
	}

}
