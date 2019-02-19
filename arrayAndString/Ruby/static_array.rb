# This class just dumbs down a regular Array to be statically sized.
class StaticArray

  def initialize(capacity)
    @store = Array.new(capacity, "empty");
  end

  # O(1)
  def [](index)
    validate!(index)
    store[index]
  end

  # O(1)
  def []=(index, value)
    validate!(index)
    store[index] = value
  end

  def length
    store.length
  end

  protected
  attr_accessor :store

  private
  def validate!(index)
    raise "overflow error" unless index.between?(0, self.store.length - 1)
  end
end
