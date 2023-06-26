class CreateCultureTypes < ActiveRecord::Migration[7.0]
  def change
    create_table :culture_types do |t|
      t.string :name, null: false

      t.timestamps default: -> { 'CURRENT_TIMESTAMP' },
                   null: false,
                   precision: 6,
                   comment: 'Created and updated timestamps in ISO8601 format'
    end
    add_index :culture_types, :name, unique: true
  end
end
