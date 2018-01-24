class AddTotalToRolls < ActiveRecord::Migration[5.1]
  def change
    add_column :rolls, :total, :integer
  end
end
