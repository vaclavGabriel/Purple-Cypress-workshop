### Basic selectors 

Sufficient for 90 % of cases

`#container` → everything with id `container`
`.blue` → everything with class containing `blue`
`.blue.big` → everything with class containing `blue` and `big`
`button.primary` → `button`s with class containing `primary`
`.sidebar button` → inside `.sidebar`, `button`s 
`input[type=text]` → `input`s with attribute `type` of value `text`
`input[type=text]:first` → above, but just first
`input[type=text]:eq(0)` → same as above
`input[required]` → `input`s with attribute `required` (of any value)
`a[href^="https"]` → `a`s with attribute `href` starting with `https`
`a[href*="kiwi.com"]` → `a`s with attribute `href` containing `kiwi.com`
`img[src$=".gif"]` → `img`s with attribute `src` ending with `.gif`
`input:not(.touched)` → `input`s except those with class containing `touched`
`input:not([required])` → `input`s except those with attribute `required` (of any value)
