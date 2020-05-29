
namespace FundooSelenium.Page
{
    using OpenQA.Selenium;
    using SeleniumExtras.PageObjects;
    using System;
    using System.Collections.Generic;
    using System.Text;
    class RegisterToApplication
    {
        IWebDriver webdriver;
        public RegisterToApplication(IWebDriver driver)
        {
            PageFactory.InitElements(driver, this);
            this.webdriver = driver;
        }
        [FindsBy(How = How.Id, Using = "mat-input-0")]
        private IWebElement firstname;
        [FindsBy(How = How.Id, Using = "mat-input-1")]
        private IWebElement lastname;
        [FindsBy(How = How.Id, Using = "mat-input-2")]
        private IWebElement email;
        [FindsBy(How = How.Id, Using = "mat-input-3")]
        private IWebElement password;
          [FindsBy(How = How.Id, Using = "mat-input-4")]
        private IWebElement pwd;

        [FindsBy(How = How.ClassName, Using = "mat-button-wrapper")]
        private IWebElement buttonregister;

        public void Register(string FirstName, string LastName, string Email,string Password,string ConfirmPassword)
        {
            System.Threading.Thread.Sleep(2000);
            firstname.SendKeys(FirstName);
            lastname.SendKeys(LastName);
            email.SendKeys(Email);
            password.SendKeys(Password);
            pwd.SendKeys(ConfirmPassword);
        }
        public void ClickToRegister()
        {
            buttonregister.Click();
        }
    }
}
