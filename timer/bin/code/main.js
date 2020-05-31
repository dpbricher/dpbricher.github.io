import { render } from './preact.js'
import jsx from './jsx.js'

import Counter from './counter.js'
import Timer from './timer.js'

const app = jsx`<div>
  <${Timer}/>
  <${Counter}/>
</div>`
render(app, document.body);
