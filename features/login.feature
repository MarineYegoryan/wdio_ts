Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password>
    And I wait for element "#content a" to be displayed
#    Then I should see a flash message saying <message>

    Examples:
      | username | password             |
      | tomsmith | SuperSecretPassword! |
      | foobar   | barfoo               |
