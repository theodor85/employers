class EmployeeReflex < ApplicationReflex
  def delete id
    Employee.find(id).delete
  end

  def add name, last_name
    Employee.new(name: name, last_name: last_name).save
  end
end
