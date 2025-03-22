import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class HomePage extends Component {
  @tracked displayLogIn = false;

  @action
  showLogIn() {
    this.displayLogIn = true;
  }

  @action
  hideLogIn() {
    this.displayLogIn = false;
  }
}
