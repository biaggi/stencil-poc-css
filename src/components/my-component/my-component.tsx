import { Component, Prop, getAssetPath, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  assetsDirs: ['assets'],
  shadow: true
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (<div>

      <img src={getAssetPath('./assets/opensource.png')} />
      Hello, World! I'm {this.getText()}
      <div class="bg"> </div>

    </div>);
  }
}
