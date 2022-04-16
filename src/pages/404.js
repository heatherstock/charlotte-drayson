import * as React from "react"
import { Link } from "gatsby"
import { GlobalStyle } from "../theme"

const NotFoundPage = () => {
  return (
    <main>
      <GlobalStyle/>
      <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry we couldn’t find what you were looking for.
      </p>
      <Link to="/">Go to home page</Link>.
    </main>
  )
}

export default NotFoundPage
