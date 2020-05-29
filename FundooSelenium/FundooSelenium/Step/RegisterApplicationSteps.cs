using FundooSelenium.Page;
using NUnit.Framework;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace FundooSelenium
{
    [Binding]
    public class RegisterApplicationSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I should navigated to Register application")]
        public void GivenIShouldNavigatedToRegisterApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("http://localhost:4200/register");
        }


        [Given(@"I should  type the (.*),(.*),(.*) , (.*) and (.*)")]
        public void GivenIShouldTypeTheAnd(string p0, string p1, string p2, string p3, string p4)
        {
           var register = new RegisterToApplication(driver);
            register.Register(p0,p1,p2,p3,p4);
        }

        [When(@"I click on the Register button")]
        public void WhenIClickOnTheRegisterButton()
        {
            var button = new RegisterToApplication(driver);
            button.ClickToRegister();
        }

        [Then(@"I should see the login page of my application")]
        public void ThenIShouldSeeTheLoginPageOfMyApplication()
        {
           driver.Url= "http://localhost:4200/login";
        }
        
    }
}
