import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

// component for about page
const AboutPage = () => {
    return (
        <Layout pageTitle="About">
            <p>Lorem Ipsum Africawit Construction</p>
        </Layout>
    )
}

export const Head = () => <Seo title="About" />

export default AboutPage