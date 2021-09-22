Feature: The Internet Guinea Pig Website

  Scenario Outline: As a user, I can log into the secure area

    Given I am on the login page
    When I login with <username> and <password> on <page> page
#    And I wait for element "#content a" to be displayed
    And I wait for element "secure > flashAlert" to be displayed


#    Then I should see a flash message saying <message>

    Examples:
      | username | password             |page|
      | tomsmith | SuperSecretPassword! |login|
      | foobar   | barfoo               |login|
