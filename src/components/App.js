import React from 'react';
import Nav from './Nav';
import Main from './Main';
import Footer from './Footer';


window.addEventListener('DOMContentLoaded', () => {
    let buttons = document.querySelectorAll('.nav-link-btn');
    let tabs = document.querySelectorAll('.tab');
    buttons.forEach((button,ibtn)=>{
      button.addEventListener('click',function(){
        buttons.forEach((button)=>{
            button.classList.remove('active');
        })
          button.classList.add('active');

          tabs.forEach((tab,itab)=>{
              if(itab===ibtn){
                  tab.style.display='block';
              }
              else{
                  tab.style.display='none';
              }
          })

      })  
    })
});
export default function App(){
    return(
        <div>
        <Nav/>
        <Main />
        <Footer />

        </div>
    )
}