import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LogIn extends Component {
  @action
  handleClick(event) {
    event.preventDefault();
    this.args.submitAction();
  }
}
