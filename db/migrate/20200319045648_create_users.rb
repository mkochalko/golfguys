class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.integer :tier1, null: false
      t.integer :tier2, null: false
      t.integer :tier3, null: false
      t.integer :tier4, null: false
      t.integer :tier5, null: false
      t.integer :tier6, null: false

      t.timestamps
    end
  end
end
