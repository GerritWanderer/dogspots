class AddGuestToUsers < ActiveRecord::Migration
  def change
    change_table :users do |t|
      t.integer :is_guest, :default => 1
    end
  end
end
