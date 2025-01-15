export class MyQueue {
  private s1: number[] = [];
  private s2: number[] = [];
  private getStack() {
    const stacks =
      this.s1.length > 0
        ? {
            buffer: this.s2,
            data: this.s1,
          }
        : {
            buffer: this.s1,
            data: this.s2,
          };

    return stacks;
  }

  push = (x: number): null => {
    const { buffer, data } = this.getStack();


    while (data.length !== 0) {
      const e = data.pop();

      if (e) {
        buffer.push(e);
      }
    }

    data.push(x)

    while(buffer.length !== 0) {
      const e = buffer.pop();

      if (e) {
        data.push(e);
      }
    }

    return null
  };

  pop = (): number | null => {
    const { data } = this.getStack();

    return data.pop() ?? null;
  };

  peek = (): number => {
    const { data } = this.getStack();

    return data?.[data.length - 1] ?? null;
  };

  empty = (): boolean => {
    const { data } = this.getStack();
    return data.length === 0;
  };
}


export class MyQueue2 {
  private sIn: number[] = [];
  private sOut: number[] = [];

  push = (x: number): null => {
    this.sIn.push(x);
    return null;
  };

  #fill() {
    while (this.sIn.length > 0) {
      this.sOut.push(this.sIn.pop()!);
    }
  }

  pop = (): number | null => {
    const popItem = this.sOut.pop();
    if (popItem) return popItem;

    this.#fill();

    return this.sOut.pop() ?? null;
  };

  peek = (): number | null => {
    const peekItem = this.sOut[this.sOut.length - 1];
    if (peekItem) return peekItem;

    this.#fill();

    return this.sOut?.[this.sOut.length - 1] ?? null;
  };

  empty = (): boolean => {
    return this.sIn.length === 0 && this.sOut.length === 0;
  };
}