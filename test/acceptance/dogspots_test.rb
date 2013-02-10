require 'test_helper'
class DogspotsTest < ActionDispatch::IntegrationTest
  fixtures :all

  def test_basic_webapp_navigation
    visit '/'
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
    click_link 'Index Spots'
    assert page.has_content?('Spots')
    assert page.has_xpath?('//li', :count => 2)
  end

  def test_create_spot
    visit '/'
    click_link 'New Spot'
    assert page.has_content?('New Spot')
    fill_in('Title:', :with => 'Halbinsel Stralau')
    fill_in('Text:', :with => 'Tolle Gegend')
    click_link 'Create'

    # show detail page
    assert page.has_content?('Show Spot')
    assert page.has_content?('Halbinsel Stralau')
    assert page.has_content?('Comments')

    # go back to index page
    click_link 'Index Spots'
    save_and_open_page
    assert page.has_content?('Spots')
    assert page.has_xpath?('//li', :count => 3)

    # comment workaround
    click_link 'Halbinsel Stralau [0]'
    assert page.has_xpath?('//li', :count => 1)
    assert page.has_content?('Tolle Gegend')
  end

  def test_create_comment
    visit '/'
    click_link "#{spots(:aaron_park).title} [5]"
    assert page.has_xpath?('//li', :count => 2)
    fill_in('Text:', :with => 'Tolle Gegend')
    click_link 'Create Comment'
    assert page.has_xpath?('//li', :count => 3)
    assert page.has_content?('Tolle Gegend')
  end
end