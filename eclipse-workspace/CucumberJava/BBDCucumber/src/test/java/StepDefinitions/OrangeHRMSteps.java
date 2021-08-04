package StepDefinitions;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import io.cucumber.datatable.DataTable;
import io.cucumber.java.en.*;
import io.github.bonigarcia.wdm.WebDriverManager;



public class OrangeHRMSteps
{
	WebDriver driver;
	@Given("navigate to Orange Hrm application")
	public void navigate_to_Orange_Hrm_application() {
		System.out.println("Navigate to Orange HRM Application"); 
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.manage().deleteAllCookies();
		driver.manage().timeouts().pageLoadTimeout(30, TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
		driver.get("https://opensource-demo.orangehrmlive.com/index.php/auth/login"); 
	}

	@And("^enter \"(.*)\" and \"(.*)\"$")
	public void enter_email_and_password(String uname, String pwd) {
		System.out.println("Enter Email and Password");
		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(uname);
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(pwd);
	}

	@When("I click on login button")
	public void i_click_on_login_button() {
		System.out.println("I click on the login Button");
		driver.findElement(By.xpath("//input[@id='btnLogin']")).click();
	}

	@Then("login successful")
	public void login_successful() {
		System.out.println("Login successful");
		driver.quit();
	}


	/////////////////////////



	@Given("user (.*) and (.*)")
	public void user_marsQA_testQA_gmail_com_and(String email, String pass) {
		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(email); 
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(pass);
	}

	@When("user enters valid credentials using dataTable")
	public void user_enters_valid_credentials_using_dataTable(DataTable dataTable) {
		List<List<String>> data = dataTable.cells();
		driver.findElement(By.xpath("//input[@id='txtUsername']")).sendKeys(data.get(0).get(0)); 
		driver.findElement(By.xpath("//input[@id='txtPassword']")).sendKeys(data.get(0).get(1));
	}


}
