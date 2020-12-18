// Menu component
import React,{Component} from 'react';

class MenuPage extends Component {
    render(){
      return(
        <div>
          <h1>Menu</h1>
          <p>Check out our amazing 24/7 menu:
            <ul>
              <li> Spaghetti- $50</li>
              <img src="https://www.thewholesomedish.com/wp-content/uploads/2020/08/The-Best-Classic-Spaghetti-1200-768x768.jpg"></img>
              <li> Coffee-$100</li>
              <img src="https://media3.s-nbcnews.com/j/newscms/2019_33/2203981/171026-better-coffee-boost-se-329p_67dfb6820f7d3898b5486975903c2e51.fit-1000w.jpg"></img>
              <li>Ramen Noodles-$1000000 </li>
              <img src="https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,c_fit,w_764,h_510/k%2Farchive%2F4228906cb4af7dccaf0c7809e5e354a1a6f693b0"></img>
            </ul>
          </p>
        </div>
      );
    }
  }
  export default MenuPage;