### Basic selectors
Good enough for ~ 90 % of cases.

`cy.get('`:
* `#firstname` → Selects the element with `id="firstname"`
* `.intro` → Selects all elements with `class="intro"`
* `.name1.name2` → Selects all elements with both `name1` and `name2` set within its class attribute
* `.name1 .name2` → Selects all elements with name2 that is a descendant of an element with name1
* `[class*=Workshop]` -> Selects all classes starting with `Workshop`
* `[data-testid=Forex]` -> Select an element with an attribute `data-testid`
* `button.primary` → `button`s with class containing `primary`
* `.sidebar button` → inside `.sidebar`, `button`s 
* `input[type=text]` → `input`s with attribute `type` of value `text`
* `input[type=text]:first` → above, but just first
* `input[type=text]:eq(0)` → same as above
* `input[required]` → `input`s with attribute `required` (of any value)
* `a[href^="https"]` → `a`s with attribute `href` starting with `https`
* `a[href*="axiory.com"]` → `a`s with attribute `href` containing `axiory.com`
* `img[src$=".gif"]` → `img`s with attribute `src` ending with `.gif`
* `input:not(.touched)` → `input`s except those with class containing `touched`
* `input:not([required])` → `input`s except those with attribute `required` (of any value)

`')`

#### Using Cypress testing library
* Use Cypress testing library queries for accessibility testing
    * Query priority: https://testing-library.com/docs/queries/about/
    * `Testing Playground` Chrome extension: https://chrome.google.com/webstore/detail/testing-playground/hejbmebodbijjdhflfknehhcgaklhano
    * Example: 

`cy.findByRole('button', { name: /start trading/i })` -> Finds an element with a role/type `button` and text `start trading`. <br>
`cy.get('[data-testid=Button]')` -> Finds and element with a `data-testid` Button.

Pros of using the library: 
* a11y testing – semantics elements should be used 
* translations testing

Cons of using the library: 
* translations testing

#### Want to know more? 
[W3schools CSS Selectors reference](https://www.w3schools.com/cssref/css_selectors.asp)