Feature: RegisterApplication
	Test the Register functionality of application
	will verify if the Email and Password combination are working as expected

@Browser:Chrome
Scenario: Verify if the login functionality is working (+ve case)
	Given I should navigated to Register application
	And I should  type the <FirstName>,<LastName>,<Email> , <Password> and <ConfirmPassword>
	When I click on the Register button
	Then I should see the login page of my application

	Examples:
		| FirstName | LastName | Email                    | Password  | ConfirmPassword |
		| Afgan     | Sabiya   | afgansabiya786@gmail.com | qwerty123 | qwerty123       |