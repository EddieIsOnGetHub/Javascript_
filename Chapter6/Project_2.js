const one  = ()=> console.log('one');

const two  = ()=> console.log('two'); 

const three = () => { console.log('three'); 
    one(); 
    two(); 
}

const four = () =>{
    console.log('four');  
    setTimeout(one, 5000);  //timer whitch will display the one 1 second later
    three();
}

four();
