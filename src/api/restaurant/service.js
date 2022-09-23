import axios from 'axios';
import mongoose from 'mongoose';

import HistoryModel from '../models/history';

class Service {
  /**
   * Return nearvy restaurant of geolocation
   * @param {geolocation} geolocation - Longitude and lagitude params
   * @returns {restaurant} - nearvy restaurant of geolocation
   */
  async getRestaurantNeavy(geolocation, user) {
    if(!geolocation.latitude || geolocation.longitude) {
      return {status: 400, error: 'No se rebicieron las cordenadas'}
    }

    const config = {
      method: 'get',
      url: `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${geolocation.latitude}%2C${geolocation.longitude}&radius=1500&type=restaurant&keyword=cruise&key=${process.env.GOOGLE_KEY}`,
      headers: { }
    };

    const history = new HistoryModel({...geolocation, userId: user.id});
    const response = await axios(config);
    
    await history.save();

    return response.data.results;
  }
  
  /**
   * List history of restaurant nearvy
   * @param {user} user - user of auth token
   * @returns {history} - return history of restaurant nearvy
   */
  async getHistoryNearvy(user) {
    const history = await HistoryModel.find({userId: mongoose.Types.ObjectId(user.id)});

    return history;
  }
}

export default new Service();
