require_relative "static_array"

class DynamicArray
  attr_reader :length

  def initialize(capacity = 8)
    @store = StaticArray.new(capacity)
    @count = 0
  end

  def capacity
    store.length
  end

  # O(1)
  def [](index)
    store[index]
  end

  # O(1)
  def []=(index, value)
    if index >= count
      (index - count).times { push(nil) }
      push(value)
    elsif index < 0
      return nil if index < -count 
      store[count + index] = value
    else 
      store[index] = value
    end
  end

  # O(1)
  def pop
    return nil if count == 0
    last_el = store[count - 1]
    @count -= 1
    return last_el
  end

  # O(1) ammortized; O(n) worst case. Variable because of the possible
  # resize.
  def push(val)
    resize! if (count === capacity)

    store[count] = val
    @count += 1
    self
  end

  # O(n): has to shift over all the elements.
  def shift
  end

  # O(n): has to shift over all the elements.
  def unshift(val)
  end

  protected
  attr_accessor :capacity, :store
  attr_writer :length

  def check_index(index)
  end

  # O(n): has to copy over all the elements to the new store.
  def resize!
  end
end
