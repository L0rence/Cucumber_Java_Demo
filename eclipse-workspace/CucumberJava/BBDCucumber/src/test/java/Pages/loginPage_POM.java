package Pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class loginPage_POM
{


	protected WebDriver driver;

	private By SignIn_link = By.xpath("//a[contains(text(),'Sign In')]");
	private By txt_emailAddress = By.xpath("//input[@name='email']");
	private By txt_password = By.xpath("//input[@name='password']");
	private By Btn_login = By.xpath("//button[contains(text(),'Login')]");


	//Create Constructor

	public loginPage_POM(WebDriver driver) { this.driver = driver;

	if(!driver.getTitle().equals("Home")) { throw new
		IllegalStateException("This is not login page. The current page is" +
				driver.getCurrentUrl());

	} }

	//Method


	public void clickSignInLink() { driver.findElement(SignIn_link).click(); }

	public void enterEmailAddress(String username) {
		driver.findElement(txt_emailAddress).sendKeys(username); }

	public void enterpassword(String password) {
		driver.findElement(txt_password).sendKeys(password); } public void
	clickLoginBtn() { driver.findElement(Btn_login).click(); }

		public void loginValidUser(String username, String password) {
			clickSignInLink(); enterEmailAddress(username); enterpassword(password);
			clickLoginBtn();

		}


}
