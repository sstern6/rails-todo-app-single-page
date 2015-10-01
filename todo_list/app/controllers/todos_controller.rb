class TodosController < ApplicationController

  def index
    @todos = Todo.all
    @todo = Todo.new()
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      if request.xhr?
        render json: @todo
      else
        redirect_to root_path
      end
    end
  end

  private
    def todo_params
      params.require(:todo).permit(:title, :completed)
    end

end

