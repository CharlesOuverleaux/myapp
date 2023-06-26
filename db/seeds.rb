# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Cleaning database..."
CultureType.destroy_all

puts "Creating culture types..."
modern = {name: "Modern"}
traditional =  {name: "Traditional"}

[modern, traditional].each do |attributes|
  type = CultureType.create!(attributes)
  puts "Created #{type.name}"
end


Applicant.destroy_all

applicants = [
    { first_name: "John", last_name: "Doe", culture_type: "Modern" },
    { first_name: "Jane", last_name: "Smith", culture_type: "Modern" },
    { first_name: "Alice", last_name: "Johnson", culture_type: "Traditional" }
  ]
applicants.each do |applicant_attrs|
  culture_type_name = applicant_attrs.delete(:culture_type)
  culture_type = CultureType.find_by(name: culture_type_name)
  
  Applicant.create!(applicant_attrs.merge(culture_type: culture_type))
  puts "Created #{applicant_attrs[:first_name]} #{applicant_attrs[:last_name]}"
end


Company.destroy_all

companies = [
    { name: "Empion", culture_type: "Modern" },
    { name: "Henkel", culture_type: "Traditional" },
    { name: "Spotify", culture_type: "Modern" }
  ]
companies.each do |company_attrs|
  culture_type_name = company_attrs.delete(:culture_type)
  culture_type = CultureType.find_by(name: culture_type_name)
  
  Company.create!(company_attrs.merge(culture_type: culture_type))
  puts "Created #{company_attrs[:name]}"
end

puts "Finished!"
