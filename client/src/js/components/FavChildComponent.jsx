import React from 'react';
import ViewFavouriteComponent from './ViewFavouriteComponent';

export default class FavChildComponent extends React.Component{

 constructor()
  {
    super();	
  }
  
  render(){ 
      console.log("Fav Child component ");
      console.log(this.props.viewRestaurant);
     return (
      <div>
  	       {
          this.props.viewRestaurant.map(function(ViewElement){
          return(<ViewFavouriteComponent viewElement={ViewElement}/>)
          })
         }
      </div>
    )
   
  }
};  
