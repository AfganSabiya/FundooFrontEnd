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
    /// <summary>
    /// Class for SignUp Page
    /// </summary>
    public class SignUpPage
    {
        /// <summary>
        /// Defines the interface through which the user controls the browser.
        /// </summary>
       private IWebDriver driver;

        /// <summary>
        /// Constructor for signup page use the driver on the test class.
        /// PageFactory is used to find annotation to work.
        /// </summary>
        /// <param name="webDriver"></param>
        public SignUpPage(IWebDriver webDriver)
        {
            PageFactory.InitElements(webDriver, this);
            this.driver = webDriver;
        }

        /// <summary>
        /// Page Factory [FindsBy] annotation finds the web elementson the signuppage
        /// </summary>
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

        /// <summary>
        ///  method for signup passing parameters
        /// </summary>
        /// <param name="Email">email .</param>
        /// <param name="Password">password .</param>
        /// <param name="ConfirmPassword">confirm password .</param>
        public void SignUp(string Email, string Password, string ConfirmPassword)
        {
            driver.Manage().Timeouts().ImplicitWait = TimeSpan.FromMinutes(30);
            email.SendKeys(Email);
            password.SendKeys(Password);
            confirmpassword.SendKeys(ConfirmPassword);
            checkNewsletter.Click();
        }

        /// <summary>
        /// Method for SignUpButton
        /// </summary>
        public void SignUpButton()
        {
            signupbutton.Click();
        }
    }
}
