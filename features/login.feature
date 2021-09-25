Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I am on the home page
    When I click "1 position of home > titleList"


#  Scenario Outline: As a user, I can log into the secure area
#
#    Given I am on the login page
#    When I login with <username> and <password> on <page> page
#
#    Examples:
#      | username | password             |page|
#      | tomsmith | SuperSecretPassword! |base|
#      | foobar   | barfoo               |base|
