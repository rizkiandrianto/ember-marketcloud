import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('partial/province-select', 'Integration | Component | partial/province select', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{partial/province-select}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#partial/province-select}}
      template block text
    {{/partial/province-select}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
