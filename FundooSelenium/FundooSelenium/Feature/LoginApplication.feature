Feature: LoginApplication
Test the login functionality of application
	will verify if the Email and Password combination are working as expected

@Browser:Chrome
Scenario Outline:Verify if the login functionality is working (+ve case)
	Given I have navigated to my application
	And I type the <Email> and <Password>
	When I click login button
	Then I should see the Dashborad page

	Examples:
		| Email                 | Password |
		| afgansabiya@gmail.com | 123456   |