package StepDefinitions;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.java.en. *;
import io.github.bonigarcia.wdm.WebDriverManager;

public class loginPageSteps
{
	WebDriver driver;
	
	@Given("navigate to login page")
	public void navigate_to_login_page() {
		 WebDriverManager.chromedriver().setup();
		  driver = new ChromeDriver();
		  
		  driver.manage().window().maximize();
		  driver.manage().deleteAllCookies();
		  driver.manage().timeouts().pageLoadTimeout(10, TimeUnit.SECONDS);
		  driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		  driver.get("http://localhost:5000/Home");
		  driver.findElement(By.xpath("//a[contains(text(),'Sign In')]")).click();  
	}

	@And("enter username and password")
	public void enter_username_and_password() {
		driver.findElement(By.xpath("//input[@name='email']")).sendKeys("dfsdf" );
		driver.findElement(By.xpath("//input[@name='password']")).sendKeys("sdfdsfs" );  
	}

	@When("clickon login button")
	public void clickon_login_button() {
		 driver.findElement(By.xpath("//button[contains(text(),'Login')]")).click();
	}

	@Then("verify the homepage")
	public void verify_the_homepage() {
	    driver.close();
	    driver.quit();
	}

}
