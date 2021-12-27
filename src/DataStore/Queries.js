import { gql } from '@apollo/client'

export const SEARCH_ALL_SOLR = gql`
  query($keywords: String!)
    {
      search(tenant:AsiaLaw, keyword: $keywords){
        id,
        name,
        suffix,
        type
      }
    }`;