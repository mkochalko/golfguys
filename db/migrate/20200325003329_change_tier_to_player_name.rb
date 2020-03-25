class ChangeTierToPlayerName < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :tier1, :string
    change_column :users, :tier2, :string
    change_column :users, :tier3, :string
    change_column :users, :tier4, :string
    change_column :users, :tier5, :string
    change_column :users, :tier6, :string
  end
end
