import React from 'react'

import Layout from '../components/layout'

import Amplify from 'aws-amplify'
import config from '../aws-exports'
Amplify.configure(config)

const blogPostTemplate = () => (
  <Layout>
    <h1>test post</h1>
  </Layout>
)

export default blogPostTemplate
