Feature: SignUpPage
	
	Verify the functionilities working in the application
@SmokeTest
@Browser:Chrome
Scenario:Verify signup function of  the account(+ve cases)
	Given I have navigate to signup page of the application
	And  I have fill the details  <Email>,<Password> and <ConfirmPassword>
	When I click on the creataccount button
	Then I navigate to the login page

	Examples:
		| Email                 | Password | ConfirmPassword |
		| afgansabiya786@gmail.com | sabiya123 | sabiya123   |
