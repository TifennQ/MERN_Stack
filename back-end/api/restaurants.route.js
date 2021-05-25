import express from 'express'
import RestaurantCtrl from "./restaurants.controller.js"
import ReviewsCtrl from "./reviews.controller.js"

const router = express.Router()

router.route('/').get(RestaurantCtrl.apiGetRestaurants)

router
    .route('/review')
    .post(RewiewsCtrl.apiPostreview)
    .put(RestaurantCtrl.apiUpdateReview)
    .delete(RestaurantCtrl.apiDeleteReview)

export default router