class CommentsController < ApplicationController
  before_action :find_song
  before_action :authenticate_user!

  def create
    @comment = @song.comments.new(comment_params)

    respond_to do |format|
      if @comment.save
        format.html {redirect_to @song}
        format.js
      else
        format.html {redirect_to @song}
      end
    end
  end

  def destroy
    @comment = @song.comments.find(params[:id])
    @comment.destroy
  end

  private 
  def find_song
    @song = Song.find(params[:song_id])
  end

  def comment_params
    params.require(:comment).permit(:content).merge(user: current_user, reply_id: params[:reply_id], timepoint: params[:timepoint])
  end
end
