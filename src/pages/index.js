import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Nayela Wickramasuriya - software developer, writer"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[`blog`, `gatsby`, `javascript`, `react`]}
        />
        <h1>
          Hi friends{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>Welcome to my website.</p>
        <p>
          I am a software developer working primarily in Ruby on Rails, though I also dabble in some JavaScript/TypeScript. I'm proud to work at <a href="https://www.patchwork.health/">Patchwork Health</a> helping the NHS.
        </p>
        <p>
          I also write and was shortlisted for the <a href="https://bricklanebookshop.org/2021-short-story-prize/">Brick Lane Bookshop Short Story Prize</a>. When I am not writing code, I write regular words and am currently working on a novel about two women from my native Sri Lanka.
        </p>
        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
