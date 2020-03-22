class ChangeOddsToDecimalInPlayers < ActiveRecord::Migration[5.2]
  def change
    change_column :players, :odds, :decimal
  end
end
