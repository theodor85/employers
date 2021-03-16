class EmployeeReflex < ApplicationReflex
  def delete id
    Employee.find(id).delete
  end
end
