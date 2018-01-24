class DiceController < ApplicationController

  def fetch_roll_history
    @rolls = Roll.all
    render json: @rolls
  end

  def post_roll_history
    
  end

end
