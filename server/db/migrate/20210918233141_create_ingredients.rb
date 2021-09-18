class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.integer :quantity
      t.string :item

      t.timestamps
    end
  end
end
