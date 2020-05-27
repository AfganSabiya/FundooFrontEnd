//---------------------------------------------------------------------------------------------------------------------------------------
//<copyright file = "SignUpPageSteps.cs" company="Bridgelabz">
//   Copyright © 2019 Company="BridgeLabz"
// </copyright>
// <creator name=Afgan Sabiya"/>
//---------------------------------------------------------------------------------------------------------------------------------------
namespace BookSwagon
{
    using BookSwagon.Pages;
    using OpenQA.Selenium;
    using OpenQA.Selenium.Chrome;
    using System;
    using TechTalk.SpecFlow;
    /// <summary>
    /// Class for SignupPage Steps
    /// </summary>
    [Binding]
    public class SignUpPageSteps
    {
       
        IWebDriver driver = new ChromeDriver();

        /// <summary>
        ///Generate method for where to navigate signup page application
        /// </summary>
        [Given(@"I have navigate to signup page of the application")]
        public void GivenIHaveNavigateToSignupPageOfTheApplication()
        {
            driver.Manage().Window.Maximize();
            driver.Navigate().GoToUrl("https://www.bookswagon.com/signup");
        }

        /// <summary>
        /// Generate method  for Fill the details of an application
        /// </summary>
        /// <param name="Email">eamil .</param>
        /// <param name="Password">password.</param>
        /// <param name="ConfirmPassword">confirmpassword .</param>
        [Given(@"I have fill the details  (.*),(.*) and (.*)")]
        public void GivenIHaveFillTheDetailsAnd(string Email, string Password, string ConfirmPassword)
        {
            SignUpPage signupPage = new SignUpPage(driver);
            signupPage.SignUp(Email, Password, ConfirmPassword);
        }

        /// <summary>
        /// Generate method  for when to click on registering button
        /// </summary>
        [When(@"I click on the creataccount button")]
        public void WhenIClickOnTheCreataccountButton()
        {
            SignUpPage signupPage = new SignUpPage(driver);
            signupPage.SignUpButton();
        }
        
        /// <summary>
        /// Generate method for login page
        /// </summary>
        [Then(@"I navigate to the login page")]
        public void ThenINavigateToTheLoginPage()
        {
           
        }
    }
}
