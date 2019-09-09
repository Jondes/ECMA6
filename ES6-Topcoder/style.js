import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  // Example of an asynchronous operation 
let Testfunc=()=> {
    console.log('first') 
    setTimeout(()=> console.log('second'), 2000) 
    console.log('third')
}

Testfunc() 
The output for the above code is 
first 
third 
second
  'body': {
    'background': 'burlywood'
  }
});
