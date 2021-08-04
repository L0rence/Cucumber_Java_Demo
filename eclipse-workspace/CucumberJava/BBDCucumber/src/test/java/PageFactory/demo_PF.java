package PageFactory;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class demo_PF {
	
	@FindBy(xpath = "//input[@id='txtUsername']")
	WebElement txt_username;
	
	@FindBy(xpath = "//input[@id='txtPassword']")
	WebElement txt_password;
	
	@FindBy(xpath = "//input[@id='btnLogin']")
	WebElement loin_button;
	
	WebDriver driver;
	public demo_PF(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, demo_PF.class);
	}
	
	public void enterUsername(String username) {
		txt_username.sendKeys(username);
	}
	public void enterpassword(String password) {
		txt_password.sendKeys(password);
	}
	
	public void clickLogin() {
		loin_button.click();
	}
	

}
