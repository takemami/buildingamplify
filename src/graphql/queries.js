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
export const getContainerData = /* GraphQL */ `
  query GetContainerData($containername: String!) {
    getContainerData(containername: $containername) {
      containername
      containercapacity
      containerpicture
      createdAt
      updatedAt
    }
  }
`;
export const listContainerData = /* GraphQL */ `
  query ListContainerData(
    $containername: String
    $filter: ModelContainerDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listContainerData(
      containername: $containername
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        containername
        containercapacity
        containerpicture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCupData = /* GraphQL */ `
  query GetCupData($cupname: String!) {
    getCupData(cupname: $cupname) {
      cupname
      cupcapacity
      cuppicture
      createdAt
      updatedAt
    }
  }
`;
export const listCupData = /* GraphQL */ `
  query ListCupData(
    $cupname: String
    $filter: ModelCupDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCupData(
      cupname: $cupname
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cupname
        cupcapacity
        cuppicture
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getUserData = /* GraphQL */ `
  query GetUserData($username: String!, $order: Int!) {
    getUserData(username: $username, order: $order) {
      username
      order
      favorite_cupname
      favorite_cocktail
      createdAt
      updatedAt
    }
  }
`;
export const listUserData = /* GraphQL */ `
  query ListUserData(
    $username: String
    $order: ModelIntKeyConditionInput
    $filter: ModelUserDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUserData(
      username: $username
      order: $order
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        order
        favorite_cupname
        favorite_cocktail
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getHistoryData = /* GraphQL */ `
  query GetHistoryData($username: String!, $cocktailname: String!) {
    getHistoryData(username: $username, cocktailname: $cocktailname) {
      username
      cocktailname
      cocktaildegree
      unixtime
      cupcapacity
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const listHistoryData = /* GraphQL */ `
  query ListHistoryData(
    $username: String
    $cocktailname: ModelStringKeyConditionInput
    $filter: ModelHistoryDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listHistoryData(
      username: $username
      cocktailname: $cocktailname
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        username
        cocktailname
        cocktaildegree
        unixtime
        cupcapacity
        liqml
        mixml
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getDegreeHistoryData = /* GraphQL */ `
  query GetDegreeHistoryData($unixtime: String!) {
    getDegreeHistoryData(unixtime: $unixtime) {
      unixtime
      cockdegree
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const listDegreeHistoryData = /* GraphQL */ `
  query ListDegreeHistoryData(
    $unixtime: String
    $filter: ModelDegreeHistoryDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listDegreeHistoryData(
      unixtime: $unixtime
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        unixtime
        cockdegree
        liqml
        mixml
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getCocktailData = /* GraphQL */ `
  query GetCocktailData($cocktailname: String!, $cocktailcreator: String!) {
    getCocktailData(
      cocktailname: $cocktailname
      cocktailcreator: $cocktailcreator
    ) {
      cocktailname
      cocktailcreator
      cocktailpicture
      cocktailfeature
      cocktailtaste
      liqueur
      mixer
      createdAt
      updatedAt
    }
  }
`;
export const listCocktailData = /* GraphQL */ `
  query ListCocktailData(
    $cocktailname: String
    $cocktailcreator: ModelStringKeyConditionInput
    $filter: ModelCocktailDataFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCocktailData(
      cocktailname: $cocktailname
      cocktailcreator: $cocktailcreator
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        cocktailname
        cocktailcreator
        cocktailpicture
        cocktailfeature
        cocktailtaste
        liqueur
        mixer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const historyIndexQuery = /* GraphQL */ `
  query HistoryIndexQuery(
    $username: String
    $unixtime: ModelIntKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelHistoryDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    HistoryIndexQuery(
      username: $username
      unixtime: $unixtime
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        username
        cocktailname
        cocktaildegree
        unixtime
        cupcapacity
        liqml
        mixml
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cocktailtasteIndexQuery = /* GraphQL */ `
  query CocktailtasteIndexQuery(
    $cocktailtaste: String
    $cocktailcreator: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CocktailtasteIndexQuery(
      cocktailtaste: $cocktailtaste
      cocktailcreator: $cocktailcreator
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cocktailname
        cocktailcreator
        cocktailpicture
        cocktailfeature
        cocktailtaste
        liqueur
        mixer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cocktaiLliqandMixIndexQuery = /* GraphQL */ `
  query CocktaiLliqandMixIndexQuery(
    $liqueur: String
    $mixer: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CocktaiLliqandMixIndexQuery(
      liqueur: $liqueur
      mixer: $mixer
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cocktailname
        cocktailcreator
        cocktailpicture
        cocktailfeature
        cocktailtaste
        liqueur
        mixer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cocktailcreatorIndexQuery = /* GraphQL */ `
  query CocktailcreatorIndexQuery(
    $cocktailcreator: String
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CocktailcreatorIndexQuery(
      cocktailcreator: $cocktailcreator
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cocktailname
        cocktailcreator
        cocktailpicture
        cocktailfeature
        cocktailtaste
        liqueur
        mixer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cocktailmixerIndexQuery = /* GraphQL */ `
  query CocktailmixerIndexQuery(
    $mixer: String
    $cocktailcreator: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CocktailmixerIndexQuery(
      mixer: $mixer
      cocktailcreator: $cocktailcreator
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cocktailname
        cocktailcreator
        cocktailpicture
        cocktailfeature
        cocktailtaste
        liqueur
        mixer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const cocktailliqueurIndexQuery = /* GraphQL */ `
  query CocktailliqueurIndexQuery(
    $liqueur: String
    $cocktailcreator: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelCocktailDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    CocktailliqueurIndexQuery(
      liqueur: $liqueur
      cocktailcreator: $cocktailcreator
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        cocktailname
        cocktailcreator
        cocktailpicture
        cocktailfeature
        cocktailtaste
        liqueur
        mixer
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
