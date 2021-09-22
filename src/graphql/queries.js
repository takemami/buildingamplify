/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLiqueurData = /* GraphQL */ `
  query GetLiqueurData($liqueurname: String!) {
    getLiqueurData(liqueurname: $liqueurname) {
      liqueurname
      liqueurdegree
      createdAt
      updatedAt
    }
  }
`;
export const listLiqueurData = /* GraphQL */ `
  query ListLiqueurData(
    $liqueurname: String
    $filter: ModelLiqueurDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listLiqueurData(
      liqueurname: $liqueurname
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        liqueurname
        liqueurdegree
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
