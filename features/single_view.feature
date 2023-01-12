Feature: Single View

  As a user
  I want to see the details of a recipe
  In order to cook myself

  Scenario: Opening a Single View page
    Given a request has been successful
    And I have selected a recipe from the list
    When the Single Page View opens,
    Then I see a big picture 
    And I see the list of ingredients
    And I see a link to the source recipe

