using OpenQA.Selenium;
using SeleniumExtras.PageObjects;
using System;
using System.Collections.Generic;
using System.Text;

namespace FundooSelenium.Page
{
    class LoginToApplication
    {
        IWebDriver webdriver;
        public LoginToApplication(IWebDriver presentdriver)
        {
            PageFactory.InitElements(presentdriver, this);
            this.webdriver = presentdriver;
        }
     
        [FindsBy(How = How.Id, Using = "mat-input-0")]
        private IWebElement email;
        [FindsBy(How = How.Id, Using = "mat-input-1")]
        private IWebElement password;
        [FindsBy(How = How.ClassName, Using = "mat-button-wrapper")]
        private IWebElement loginbutton;

        public void Login(string Email,string Password)
        {
            System.Threading.Thread.Sleep(2000);
            email.SendKeys(Email);
            password.SendKeys(Password);
        }

        public void ClickToLoginButton()
        {
            loginbutton.Submit();
        }

    }
}
