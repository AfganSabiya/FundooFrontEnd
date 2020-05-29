//---------------------------------------------------------------------------------------------------------------------------------------
//<copyright file = "HomePage.cs" company="Bridgelabz">
//   Copyright © 2019 Company="BridgeLabz"
// </copyright>
// <creator name=Afgan Sabiya"/>
//---------------------------------------------------------------------------------------------------------------------------------------
namespace BookSwagon.Pages
{
    using OpenQA.Selenium;
    using OpenQA.Selenium.Support.PageObjects;
    using System;
    using System.Collections.Generic;
    using System.Text;
    class HomePage
    {
        private IWebDriver driver;

        [FindsBy(How = How.Id, Using = "account")]
        public IWebElement MyAccount { get; set; }

    }
}
