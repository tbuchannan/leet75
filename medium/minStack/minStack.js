/** 
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

Implement the MinStack class:

MinStack() initializes the stack object.
void push(int val) pushes the element val onto the stack.
void pop() removes the element on the top of the stack.
int top() gets the top element of the stack.
int getMin() retrieves the minimum element in the stack.
You must implement a solution with O(1) time complexity for each function.

Time Complexity: O(1)
Space Complexity: O(N)
 
*/

export class MinStack {
  constructor() {
    this.stack = []
    this.min = []
  }

  push(val) {
    this.stack.push(val)
    if (this.min.length < 1) {
      this.min.push(val)
    } else if (this.min[this.min.length - 1] >= val) {
      this.min.push(val)
    }
  }

  pop() {
    if (this.stack[this.stack.length - 1] == this.min[this.min.length - 1]) {
      this.min.pop()
    }
    this.stack.pop()
  }

  top() {
    return this.stack[this.stack.length - 1]
  }

  getMin() {
    return this.min[this.min.length - 1]
  }
}
