class Sorter {
   
  constructor(a=[], kol=0) {
    this.a=a;
    this.kol=kol;
  }
  
  add(element) {
    this.a.push(element);
    this.kol=this.kol+1;
  }

  at(index) {
   return this.a[index];
    }

  get length() {
    //console.log(this.kol);
    return this.kol;

  }

  toArray() {
    console.log(this.a);
    return this.a;
  }

  sort(indices) {
    var arr=[];

    for (var i = 0, endI = indices.length - 1; i < endI; i++) {
      for (var j = 0, endJ = endI - i; j < endJ; j++) {

          if (indices[j] > indices[j + 1]) {
              var swap = indices[j];

              indices[j] = indices[j + 1];
              indices[j + 1] = swap;
          }
      }
  }

    for (var i=0; i<indices.length; i++)
    {
      arr[i]=this.a[indices[i]];
    }
    
        for (var i = 0, endI = arr.length - 1; i < endI; i++) {
        for (var j = 0, endJ = endI - i; j < endJ; j++) {

            if (arr[j] > arr[j + 1]) {
                var swap = arr[j];

                arr[j] = arr[j + 1];
                arr[j + 1] = swap;
            }
        }
    }
    for (var i=0; i<indices.length; i++)
    {
      this.a[indices[i]]=arr[i];
    }

    return 0;
    // your implementation
  }

  setComparator(compareFunction) {
    // your implementation
  }
  
}

module.exports = Sorter;
