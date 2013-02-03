class AddReportedToComments < ActiveRecord::Migration
  def change
    change_table :comments do |t|
      t.integer :reported
    end
  end
end
