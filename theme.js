import { yellow } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismGraphql from 'react-syntax-highlighter/languages/prism/graphql'

export default {
  ...yellow,
  prism: {
    style: okaidia,
    languages: {
        graphql: prismGraphql
    }
  }
}