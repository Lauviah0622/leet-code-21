/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */
var solution = function(isBadVersion: any) {

  return function(n: number): number {
      const isBad = isBadVersion(1)
      if (isBad) return 1

      let from = 1
      let to = n;
      let last = from
      let lastIsBad = isBad

      while (Math.abs(from - to) > 1) {
          const next =  Math.ceil((from + to) / 2);
          
          // 檢查下一個數字怎麼樣
          const isBad = isBadVersion(next);

          last = next
          lastIsBad = isBad
          
          if (isBad) {
              // 往左找
              to = next
          } else {
              // 往右找
              from = next 
          }

      } 

      // 這應該要看情形 return to / from ？
      return to
  };
};