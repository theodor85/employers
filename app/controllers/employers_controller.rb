class EmployersController < ApplicationController
  def index
    @employers = Employee.all
  end
end
