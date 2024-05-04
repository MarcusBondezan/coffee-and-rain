// npx ts-node src/hash-tables/hash-table.ts 

export class HashTable {
  data: Array<any>;

  constructor(size: number) {
    this.data = new Array(size);
  }

  // O(1)
  set(key: string, value: any): void {
    let address = this.hash(key);

    if (!this.data[address]) {
      this.data[address] = [];
    }

    this.data[address].push([key,value]);
  }

  // O(1) in most of the times
  // O(n) if there is collisions
  get(key: string): any {
    let address = this.hash(key);
    const currentBucket = this.data[address];

    if(currentBucket) {
      for (let i=0; i < currentBucket.length; i++) {
        if(currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }

    return undefined;
  }

  // O(n) min
  // O(n^2) max (with collision)
  keys(): Array<string> {
    const keysArray: any[] = [];

    for (let i=0; i < this.data.length; i++) {
      const slot = this.data[i];

      if(slot) {
        if (slot.length > 1) {
          for (let j=0; j < slot.length; j++) {
            keysArray.push(slot[j][0]);
          }
        } else {
          keysArray.push(this.data[i][0][0])
        }
      }
    }

    return keysArray;
  }

  private hash(key: string): number {
    let hash = 0;
    for(let i=0; i<key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(1);
myHashTable.set('grapes', 1000);
myHashTable.set('apples', 54);
myHashTable.set('oranges', 2);
myHashTable.set('kiwis', 1);
console.log(myHashTable.keys());