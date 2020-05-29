//---------------------------------------------------------------------------------------------------------------------------------------
//<copyright file = "LoginPage.cs" company="Bridgelabz">
//   Copyright © 2019 Company="BridgeLabz"
// </copyright>
// <creator name=Afgan Sabiya"/>
//---------------------------------------------------------------------------------------------------------------------------------------
namespace BookSwagon.Pages
{
    using OpenQA.Selenium;
    using SeleniumExtras.PageObjects;
    using System;
    using System.Collections.Generic;
    using System.Text;
    using System.Threading;

    public class LoginToApplication
    {
        private IWebDriver driver;
        public LoginToApplication(IWebDriver currentdriver)
        {
            PageFactory.InitElements(currentdriver, this);
            this.driver = currentdriver;
        }
        [FindsBy(How = How.Id, Using = "//input[@id='ctl00_phBody_SignIn_txtEmail']")]
        private IWebElement textEmail;
        [FindsBy(How = How.Id, Using = "//input[@id='ctl00_phBody_SignIn_txtPassword']")]
        private IWebElement textPassword;
        [FindsBy(How = How.Id, Using = "//input[@id='ctl00_phBody_SignIn_btnLogin']")]
        private IWebElement loginbutton;
        //ctl00_phBody_SignUp_plnSignUp

        public void Login(string Email, string Password)
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMinutes(30);
            textEmail.SendKeys(Email);
            textPassword.SendKeys(Password);
        }
        public void LoginButton()
        {
            Thread.Sleep(3000);
            loginbutton.Click();
        }
    }
}
