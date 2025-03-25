import { module, test } from 'qunit';
import { setupRenderingTest } from 'passiveobserer/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | analytics', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Analytics />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Analytics>
        template block text
      </Analytics>
    `);

    assert.dom().hasText('template block text');
  });
});
