//---------------------------------------------------------------------------------------------------------------------------------------
//<copyright file = "SignUpPage.cs" company="Bridgelabz">
//   Copyright © 2019 Company="BridgeLabz"
// </copyright>
// <creator name=Afgan Sabiya"/>
//---------------------------------------------------------------------------------------------------------------------------------------
namespace BookSwagon.Pages
{
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading;
    using OpenQA.Selenium;
    using SeleniumExtras.PageObjects;
  
    public class SignUpPage
    {
        private IWebDriver driver;
        public SignUpPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.driver = webDriver;
        }

        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtEmail']")]
         private IWebElement email;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtPassword']")]
        private IWebElement password;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_txtConfirmPwd']")]
        private IWebElement confirmpassword;
        [FindsBy(How = How.Id, Using = "ctl00_phBody_SignUp_chkNewsletter")]
        private IWebElement checkNewsletter;
        [FindsBy(How = How.XPath, Using = "//input[@id='ctl00_phBody_SignUp_btnSubmit']")]
        private IWebElement signupbutton;

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
