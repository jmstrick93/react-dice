require 'pry'

class DiceController < ApplicationController

  def fetch_roll_history
    @rolls = Roll.all
    render json: @rolls
  end

  def post_roll_history
    @roll = Roll.new(dice: params[:dice], total: params[:total])
    puts @roll.total
    @roll.save
  end

end
