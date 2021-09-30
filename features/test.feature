Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the Insight area

    Given I navigate to home page
    Then I should wait 5
    When I click on 4 element of "home > top navigation >> link"
    Then I should wait 5


#  Scenario Outline: As a user, I can log into the secure area
#
#    Given I am on the login page
#    When I login with <username> and <password> on <page> page
#
#    Examples:
#      | username | password             |page|
#      | tomsmith | SuperSecretPassword! |base|
#      | foobar   | barfoo               |base|
