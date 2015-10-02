class TodosController < ApplicationController

  def index
    @todos = Todo.order('created_at ASC').all
    @todo = Todo.new()
  end

  def create
    @todo = Todo.new(todo_params)
    if @todo.save
      if request.xhr?
        render @todo
      else
        redirect_to root_path
      end
    end
  end

  def update
    @todo = Todo.find(params[:id])
    if request.xhr?
     @todo.update(:completed => true)
     render :nothing => true
     else
      redirect_to root_path
    end
  end

  private
    def todo_params
      params.require(:todo).permit(:title, :completed)
    end

end

