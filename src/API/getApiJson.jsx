import Axios from 'axios'

//put domain's title to prevent circular dependency on windows
//domain's title 'MyWebShop/'
export const getPhone = Axios.get('MyWebShop/./phone.json');


  
