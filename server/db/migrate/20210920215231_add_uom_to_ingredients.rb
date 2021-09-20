class AddUomToIngredients < ActiveRecord::Migration[6.1]
  def change
    add_column :ingredients, :uom, :string
  end
end
