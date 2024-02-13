function settingname(name){
   let _name = name ;
    return {
        setName:(newname)=> (_name=newname),
        getName:()=> _name,
    };
}
let x=settingname("ajay");
console.log(x.getName());
x.setName("santa");
console.log(x.getName());
