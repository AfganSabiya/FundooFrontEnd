using FundooSelenium.Page;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace FundooSelenium
{
    [Binding]
    public class LoginApplicationSteps
    {
        IWebDriver driver = new ChromeDriver();

        [Given(@"I have navigated to my application")]
        public void GivenIHaveNavigatedToMyApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("http://localhost:4200/login");
        }
        
        [Given(@"I type the (.*) and (.*)")]
        public void GivenITypeTheAnd(string p0, string p1)
        {
            var page = new LoginToApplication(driver);
            page.Login(p0, p1);
        }
        
        [When(@"I click login button")]
        public void WhenIClickLoginButton()
        {
            var button = new LoginToApplication(driver);
            button.ClickToLoginButton();
        }
        
        [Then(@"I should see the Dashborad page")]
        public void ThenIShouldSeeTheDashboradPage()
        {
            driver.Url = "http://localhost:4200/dashboard";
        }
    }
}
