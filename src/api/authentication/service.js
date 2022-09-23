import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

import UserModel from '../models/user';

class Service {
  /**
   * return authentication token if user and password is valid
   * @param {user} loginUser - Auth user
   * @returns {token} - authentication token
   */
  async login(loginUser) {
    const user = await UserModel.findOne({ username: loginUser.username });
    if (!user) return {status:400, error:'Usuario no encontrado'};

    const validPassword = await bcrypt.compare(loginUser.password, user.password);
    if (!validPassword) throw Error('contraseña no válida' )
    
    const token = jwt.sign({
      username: user.username,
      id: user._id
    }, process.env.TOKEN_SECRET)

    return {
        token
    };
  }

  /**
   * Create new user
   * @param {user} user - Values of create nuew user
   * @returns {user} - Response of save new user in database
   */
  async create(user) {
    const isUsernameExist = await UserModel.findOne({ username: user.username });

    if (isUsernameExist) {
      return {status:400, error:'Username ya registrado'};
    }

    const salt = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(user.password, salt);

    const newUser = new UserModel({...user, password});
    return newUser.save();
  }
}

export default new Service();
