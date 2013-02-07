require 'test_helper'
class DogspotsTest < ActionDispatch::IntegrationTest
  fixtures :all

  def test_basic_webapp_navigation
    visit "/"
    assert page.has_content?('Spots')

    # Check if it has 2 Spots including a score
    assert page.has_xpath?('//li', :count => 2)
    assert page.has_content?("#{spots(:aaron_park).title} [5]")
    assert page.has_content?("#{spots(:bodo_park).title} [2]")

    # open detail page
    click_link "#{spots(:aaron_park).title} [5]"
    assert page.has_content?('Show Spot')
    assert page.has_content?(spots(:aaron_park).title)
    assert page.has_content?('Comments')
    assert page.has_xpath?('//li', :count => 2)
    assert page.has_content?(comments(:aaron_park_1).text)
    assert page.has_content?(comments(:aaron_park_2).text)

    # go back to index page
    click_link "Index Spots"
    assert page.has_content?('Spots')
    assert page.has_xpath?('//li', :count => 2)
  end
end