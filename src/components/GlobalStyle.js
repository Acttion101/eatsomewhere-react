import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

const GlobalStyle = createGlobalStyle`
 ${reset}

 html,body,#root{
   font-family :'Kanit',sanserif;
   height:100vh;
   width:100vw;
   font-size:20px;
 }
 
`
export default GlobalStyle
