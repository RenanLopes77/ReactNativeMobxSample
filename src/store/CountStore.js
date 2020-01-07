import {action, decorate, observable} from 'mobx';
import {persist} from 'mobx-persist';

const CountStore = class CountStore {
  count = 0;

  increment = () => {
    this.count += 1;
  };

  decrement = () => {
    if (this.count > 0) {
      this.count -= 1;
    }
  };
};
decorate(CountStore, {
  count: [persist, observable],
  increment: action,
  decrement: action,
});

export default new CountStore();
