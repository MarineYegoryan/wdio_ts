Feature: The Internet Guinea Pig Website

  Scenario: As a user, I can log into the secure area
    Given I am on the login page
    When I login with tomsmith and SuperSecretPassword! on login page
    And I wait for 1-st element "secure > flashAlert" to be displayed
