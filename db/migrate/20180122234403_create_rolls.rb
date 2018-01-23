class CreateRolls < ActiveRecord::Migration[5.1]
  def change
    create_table :rolls do |t|
      t.string :dice
      t.timestamps
    end
  end
end
