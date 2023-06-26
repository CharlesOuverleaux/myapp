class CreateApplicants < ActiveRecord::Migration[7.0]
  def change
    create_table :applicants do |t|
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.references :culture_type, default: nil

      t.timestamps default: -> { 'CURRENT_TIMESTAMP' },
                   null: false,
                   precision: 6,
                   comment: 'Created and updated timestamps in ISO8601 format'
    end
  end
end
