import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('partial/city-select', 'Integration | Component | partial/city select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{partial/city-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#partial/city-select}}
      template block text
    {{/partial/city-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
