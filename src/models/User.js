import Model from './Model';

export default class User extends Model {
  static getCollectionId() {
    return 'users';
  }


}