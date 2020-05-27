using BookSwagon.Pages;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System;
using TechTalk.SpecFlow;

namespace BookSwagon
{
    [Binding]
    public class SignUpPageSteps

    {
        IWebDriver driver = new ChromeDriver();
        [Given(@"I have navigate to signup page of the application")]
        public void GivenIHaveNavigateToSignupPageOfTheApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/signup");
        }
        
        [Given(@"I have fill the details  (.*),(.*) and (.*)")]
        public void GivenIHaveFillTheDetailsAnd(string Email, string Password, string ConfirmPassword)
        {
            SignUpPage signupPage = new SignUpPage(driver);
            signupPage.SignUp(Email, Password, ConfirmPassword);
        }
        
        [When(@"I click on the creataccount button")]
        public void WhenIClickOnTheCreataccountButton()
        {
            SignUpPage signupPage = new SignUpPage(driver);
            signupPage.SignUpButton();
        }
        
        [Then(@"I navigate to the login page")]
        public void ThenINavigateToTheLoginPage()
        {
           // ScenarioContext.Current.Pending();
        }
    }
}
