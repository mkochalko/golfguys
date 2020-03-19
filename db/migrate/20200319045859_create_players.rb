class CreatePlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.string :name, null: false
      t.integer :odds, null: false

      t.timestamps
    end
  end
end
