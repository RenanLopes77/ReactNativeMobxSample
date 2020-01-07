import {action, decorate, observable} from 'mobx';
import {persist} from 'mobx-persist';

const UserStore = class UserStore {
  name = '';

  setName = name => {
    if (this.name !== name) {
      this.name = name;
    }
  };
};
decorate(UserStore, {
  name: [persist, observable],
  setName: action,
});

export default new UserStore();
