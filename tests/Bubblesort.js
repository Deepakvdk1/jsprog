function bubblesort(a) {
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a.length-i-1; j++) {
            if (a[j]>a[j+1]) {
                let temp=a[j+1]
                a[j+1]=a[j]
                a[j]=temp
            }    
        }
    }
    console.log(a);
    console.log(a.length)
}
var arr=[656,256,125,5,8,9698,23]
bubblesort(arr)

