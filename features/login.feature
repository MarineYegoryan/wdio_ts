Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area

    Given I navigate to home page
    When I click on "1 element of home > top navigation >> continuum >> link"

  "home > top navigation > selector > child > continuum > selctor > child > link"

#  Scenario Outline: As a user, I can log into the secure area
#
#    Given I am on the login page
#    When I login with <username> and <password> on <page> page
#
#    Examples:
#      | username | password             |page|
#      | tomsmith | SuperSecretPassword! |base|
#      | foobar   | barfoo               |base|
