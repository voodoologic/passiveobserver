import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginButton extends Component {
  @action
  onClick() {
    this.args.submitAction();
  }
}
