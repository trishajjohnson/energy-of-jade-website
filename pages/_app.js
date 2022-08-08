import React from 'react'
import NextApp from 'next/app'
import Layout from '../components/Layout'
const theme = {
  primary: 'green',
}


export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }
}