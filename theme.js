import { book } from 'mdx-deck/themes'
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia'
import prismGraphql from 'react-syntax-highlighter/languages/prism/graphql'
import prismJson from 'react-syntax-highlighter/languages/prism/json'

export default {
  ...book,
  prism: {
    style: okaidia,
    languages: {
        graphql: prismGraphql,
        json: prismJson
    }
  }
}