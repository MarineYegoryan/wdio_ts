Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    Then I should wait 5

    When I login with <username> and <password>
    Then I should see a flash message saying <message>
    Then I should wait 5
    Examples:
      | username | password             | message                        |
      | tomsmith | SuperSecretPassword! | You logged into a secure area! |
      | foobar   | barfoo               | Your username is invalid!      |
    
