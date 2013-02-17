require 'test_helper'
class DogspotsTest < ActionDispatch::IntegrationTest
  fixtures :all

  def test_basic_webapp_navigation
    visit '/'
    assert page.has_content?('Dogspots')

    # Check if it has 2 Spots including a score
    assert page.has_xpath?('//a[contains(@class, "spots-entry")]', :count => 2)
    assert page.has_content?(spots(:aaron_park).title)
    assert page.has_content?(spots(:bodo_park).title)

    # open detail page
    click_link spots(:aaron_park).title
    assert page.has_content?('Show Spot')
    assert page.has_content?(spots(:aaron_park).title)
    assert page.has_content?('Comments')
    assert page.has_xpath?('//li[contains(@class, "spot-comment")]', :count => 2)
    assert page.has_content?(comments(:aaron_park_1).text)
    assert page.has_content?(comments(:aaron_park_2).text)

    # go back to index page
    click_link 'Dogspots'
    assert page.has_xpath?('//a[contains(@class, "spots-entry")]', :count => 2)
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
    click_link 'Dogspots'
    assert page.has_xpath?('//a[contains(@class, "spots-entry")]', :count => 3)

    # comment workaround
    click_link 'Halbinsel Stralau'
    assert page.has_xpath?('//li[contains(@class, "spot-comment")]', :count => 1)
    assert page.has_content?('Tolle Gegend')
  end

  def test_update_spot
    visit '/'
    click_link spots(:aaron_park).title
    click_link 'Edit Spot'
    assert page.has_content?('Edit Spot')
    fill_in('Title:', :with => 'Aaron Park Avenue')
    click_link 'Update'

    # show detail page
    assert page.has_content?('Show Spot')
    assert page.has_content?('Aaron Park Avenue')
  end

  def test_delete_spot
    visit '/'
    click_link spots(:aaron_park).title
    click_link 'Edit Spot'
    click_link 'Destroy'

    # back on index page, check if the dogspots is deleted
    assert page.has_xpath?('//a[contains(@class, "spots-entry")]', :count => 1)
  end

  def test_create_comment
    visit '/'
    click_link spots(:aaron_park).title
    assert page.has_xpath?('//li[contains(@class, "spot-comment")]', :count => 2)
    fill_in('Text:', :with => 'Tolle Gegend')
    click_link 'Create Comment'
    assert page.has_xpath?('//li[contains(@class, "spot-comment")]', :count => 3)
    assert page.has_content?('Tolle Gegend')
  end
end