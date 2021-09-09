# Book Mark Button

This is a repo of my first npm package.

## Example
```
import React , { useState } from "react";
import { BookMarkButton } from "bookmark-button";
const App = () => {
  const [ value , setValue ] = useState(false);

  return(
    <BookMarkButton value = {value} onChange = {setValue} >
  )

}
```
