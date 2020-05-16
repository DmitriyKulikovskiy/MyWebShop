import Axios from 'axios'

//put domain's title to prevent circular dependency on windows
//don't use it on real projects
//domain's title 'MyWebShop/'
export const getPhone = Axios.get('MyWebShop/./phone.json');




  
