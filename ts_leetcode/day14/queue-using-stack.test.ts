import { describe, expect, test } from 'bun:test';
import { MyQueue, MyQueue2 } from './queue-using-stack';

test('Example 1', () => {
  type MyQueueKeys = (keyof MyQueue)

  const methods = [
    'MyQueue',
    'push',
    'push',
    'peek',
    'pop',
    'empty',
  ] as unknown as MyQueueKeys[];

  type Props = Parameters<
  MyQueue[MyQueueKeys]
>

  const props = [[], [1], [2], [], [], []] as unknown as Props[];

  const outputs = [null, null, null, 1, 1, false];

  const queue = new MyQueue();

  methods.forEach((key, index) => {
    const prop = props[index]! as Props;
    const output = outputs[index];
    const method = (queue?.[key] as Function | undefined) 

    if (!method) return 

    console.log(index, key, method);
    

    expect(method(...(prop as []))).toBe(output);
  });
});


test('Example 2', () => {
  type MyQueueKeys = (keyof MyQueue)

  const methods = ["MyQueue","push","push","push","push","pop","push","pop","pop","pop","pop"] as unknown as MyQueueKeys[];

  type Props = Parameters<
  MyQueue[MyQueueKeys]
>

  const props = [[],[1],[2],[3],[4],[],[5],[],[],[],[]] as unknown as Props[];

  const outputs = [null,null,null,null,null,1,null,2,3,4,5]
  ;

  const queue = new MyQueue();

  methods.forEach((key, index) => {
    const prop = props[index]! as Props;
    const output = outputs[index];
    const method = (queue?.[key] as Function | undefined) 

    if (!method) return 

    console.log(index, key);
    

    expect(method(...(prop as []))).toBe(output);
  });
});

test('Example MyQueue2 1', () => {
  type MyQueueKeys = (keyof MyQueue)

  const methods = [
    'MyQueue',
    'push',
    'push',
    'peek',
    'pop',
    'empty',
  ] as unknown as MyQueueKeys[];

  type Props = Parameters<
  MyQueue[MyQueueKeys]
>

  const props = [[], [1], [2], [], [], []] as unknown as Props[];

  const outputs = [null, null, null, 1, 1, false];

  const queue = new MyQueue2();

  methods.forEach((key, index) => {
    const prop = props[index]! as Props;
    const output = outputs[index];
    const method = (queue?.[key] as Function | undefined) 

    if (!method) return 

    console.log(index, key, method);
    

    expect(method(...(prop as []))).toBe(output);
  });
});


test('Example MyQueue2 2', () => {
  type MyQueueKeys = (keyof MyQueue)

  const methods = ["MyQueue","push","push","push","push","pop","push","pop","pop","pop","pop"] as unknown as MyQueueKeys[];

  type Props = Parameters<
  MyQueue[MyQueueKeys]
>

  const props = [[],[1],[2],[3],[4],[],[5],[],[],[],[]] as unknown as Props[];

  const outputs = [null,null,null,null,null,1,null,2,3,4,5]
  ;

  const queue = new MyQueue2();

  methods.forEach((key, index) => {
    const prop = props[index]! as Props;
    const output = outputs[index];
    const method = (queue?.[key] as Function | undefined) 

    if (!method) return 

    console.log(index, key);
    

    expect(method(...(prop as []))).toBe(output);
  });
});
