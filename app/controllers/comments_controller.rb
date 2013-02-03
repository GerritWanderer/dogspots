class CommentsController < ApplicationController
  def create
    @comment = Comment.create(params[:comment])
    render :json => @comment
  end

  def destroy
    @comment = Comment.find(params[:id]).delete
    render :nothing => true
  end

  def report
    @comment = Comment.find(params[:id]).update_attribute("reported", true)
    render :nothing => true
  end
end
