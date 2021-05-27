import React, { useState, useEffect } from "react";
import RestaurantDataService from "../services/restaurant";
import { Link } from "react-router-dom";


const Restaurant = (props) => {
   const initialRestaurantState = {
       id: null,
       name: "",
       address: {},
       cuisine: "",
       reviews: []
   }
   const [restaurant, setRestaurant] = useState(initialRestaurantState)

   const getRestaurant = id => {
       RestaurantDataService.get(id).then(
           (response => {
               setRestaurant(response.data)
               console.log(response.data);
           })
       )
       .catch(e => {
           console.log(e);
       })
   }

   useEffect(() => {
       getRestaurant(props.match.params.id)
   }, [props.match.params.id])

   const deleteReview = (reviewId, index) => {
       RestaurantDataService.deleteReview(reviewId).then(
           response => {
               setRestaurant((prevState) => {
                   prevState.reviews.splice(index, 1)
                   return({
                       ...prevState
                   })
               })
           }
       )
       .catch(e => {
           console.log(e);
       })
   }
}

export default Restaurant
