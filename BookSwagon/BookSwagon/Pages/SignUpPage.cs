using System;
using System.Collections.Generic;
using System.Text;
using System.Threading;
using OpenQA.Selenium;
using SeleniumExtras.PageObjects;

namespace BookSwagon.Pages
{
    public class SignUpPage
    {
        IWebDriver driver;
        public SignUpPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.driver = webDriver;
        }

        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtEmail']")]
         IWebElement email;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtPassword']")]
         IWebElement password;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtConfirmPwd']")]
         IWebElement confirmpassword;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignUp_chkNewsletter")]
         IWebElement checkNewsletter;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_btnSubmit']")]
          IWebElement signupbutton;
      
        public void SignUp(string Email, string Password, string ConfirmPassword)
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMinutes(30);
            email.SendKeys(Email);
            password.SendKeys(Password);
            confirmpassword.SendKeys(ConfirmPassword);
            checkNewsletter.Click();
        }
        public void SignUpButton()
        {
            signupbutton.Click();
        }
    }
}
