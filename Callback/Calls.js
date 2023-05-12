const f1=(f2)=>{
    console.log("f1 function is running")
    f2()
}

const f2=()=>{
    console.log('f2 function is running')
}
f1(f2)

