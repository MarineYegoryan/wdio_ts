Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the Insight area
    Given I navigate to home page
    When I wait for 2 seconds
    Then I wait for element "home > top navigation >> link" to be displayed
    When I click on 2-nd element "home > top navigation >> link"
    Then I wait for text on 2-nd element "home > top navigation >> link" to contain "how wet" ignoring case


#  Scenario Outline: As a user, I can log into the secure area
#
#    Given I am on the login page
#    When I login with <username> and <password> on <page> page
#
#    Examples:
#      | username | password             |page|
#      | tomsmith | SuperSecretPassword! |base|
#      | foobar   | barfoo               |base|
