import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('product/product-woman', 'Integration | Component | product/product woman', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{product/product-woman}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#product/product-woman}}
      template block text
    {{/product/product-woman}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
