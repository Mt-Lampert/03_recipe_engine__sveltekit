Feature: Landing Page

  As a user
  I Want to make use of the Recipe App
  In order to find recipes for cooking


  Scenario: Opening Landing Page
    When I open the landing page
    Then I see a search form Element
    And I see an input field for an ingredient
    And I see a dropdown menu for choosing a category
    And I see a 'Submit' button for submitting a request.

  Scenario: Successful Request
    When I enter a successful request into the form
    Then the input field clears
    And below the form I see a catalog of matching recipes
    And each recipe has a picture and a title
    And each recipe can be clicked to open a Single View.

  Scenario: Failing Request
    When I enter a failing request to the form
    Then a red notification appears on the screen
    And it tells me what has gone wrong.
