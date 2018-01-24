class Roll < ApplicationRecord
  validates :dice, presence: :true
  serialize :dice, Array
end
