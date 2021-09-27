/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const calculateLambda = /* GraphQL */ `
  mutation CalculateLambda(
    $username: String!
    $liqdegree: Int!
    $cockdegree: Int!
    $cupcapa: Int!
    $unixtime: Int!
    $createdAt: AWSDateTime
    $updatedAt: AWSDateTime
  ) {
    CalculateLambda(
      username: $username
      liqdegree: $liqdegree
      cockdegree: $cockdegree
      cupcapa: $cupcapa
      unixtime: $unixtime
      createdAt: $createdAt
      updatedAt: $updatedAt
    ) {
      unixtime
      cockdegree
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const createLiqueurData = /* GraphQL */ `
  mutation CreateLiqueurData(
    $input: CreateLiqueurDataInput!
    $condition: ModelLiqueurDataConditionInput
  ) {
    createLiqueurData(input: $input, condition: $condition) {
      liqueurname
      liqueurdegree
      createdAt
      updatedAt
    }
  }
`;
export const updateLiqueurData = /* GraphQL */ `
  mutation UpdateLiqueurData(
    $input: UpdateLiqueurDataInput!
    $condition: ModelLiqueurDataConditionInput
  ) {
    updateLiqueurData(input: $input, condition: $condition) {
      liqueurname
      liqueurdegree
      createdAt
      updatedAt
    }
  }
`;
export const deleteLiqueurData = /* GraphQL */ `
  mutation DeleteLiqueurData(
    $input: DeleteLiqueurDataInput!
    $condition: ModelLiqueurDataConditionInput
  ) {
    deleteLiqueurData(input: $input, condition: $condition) {
      liqueurname
      liqueurdegree
      createdAt
      updatedAt
    }
  }
`;
export const createContainerData = /* GraphQL */ `
  mutation CreateContainerData(
    $input: CreateContainerDataInput!
    $condition: ModelContainerDataConditionInput
  ) {
    createContainerData(input: $input, condition: $condition) {
      containername
      containercapacity
      containerpicture
      createdAt
      updatedAt
    }
  }
`;
export const updateContainerData = /* GraphQL */ `
  mutation UpdateContainerData(
    $input: UpdateContainerDataInput!
    $condition: ModelContainerDataConditionInput
  ) {
    updateContainerData(input: $input, condition: $condition) {
      containername
      containercapacity
      containerpicture
      createdAt
      updatedAt
    }
  }
`;
export const deleteContainerData = /* GraphQL */ `
  mutation DeleteContainerData(
    $input: DeleteContainerDataInput!
    $condition: ModelContainerDataConditionInput
  ) {
    deleteContainerData(input: $input, condition: $condition) {
      containername
      containercapacity
      containerpicture
      createdAt
      updatedAt
    }
  }
`;
export const createCupData = /* GraphQL */ `
  mutation CreateCupData(
    $input: CreateCupDataInput!
    $condition: ModelCupDataConditionInput
  ) {
    createCupData(input: $input, condition: $condition) {
      cupname
      cupcapacity
      cuppicture
      createdAt
      updatedAt
    }
  }
`;
export const updateCupData = /* GraphQL */ `
  mutation UpdateCupData(
    $input: UpdateCupDataInput!
    $condition: ModelCupDataConditionInput
  ) {
    updateCupData(input: $input, condition: $condition) {
      cupname
      cupcapacity
      cuppicture
      createdAt
      updatedAt
    }
  }
`;
export const deleteCupData = /* GraphQL */ `
  mutation DeleteCupData(
    $input: DeleteCupDataInput!
    $condition: ModelCupDataConditionInput
  ) {
    deleteCupData(input: $input, condition: $condition) {
      cupname
      cupcapacity
      cuppicture
      createdAt
      updatedAt
    }
  }
`;
export const createUserData = /* GraphQL */ `
  mutation CreateUserData(
    $input: CreateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    createUserData(input: $input, condition: $condition) {
      username
      order
      favorite_cupname
      favorite_cocktail
      createdAt
      updatedAt
    }
  }
`;
export const updateUserData = /* GraphQL */ `
  mutation UpdateUserData(
    $input: UpdateUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    updateUserData(input: $input, condition: $condition) {
      username
      order
      favorite_cupname
      favorite_cocktail
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserData = /* GraphQL */ `
  mutation DeleteUserData(
    $input: DeleteUserDataInput!
    $condition: ModelUserDataConditionInput
  ) {
    deleteUserData(input: $input, condition: $condition) {
      username
      order
      favorite_cupname
      favorite_cocktail
      createdAt
      updatedAt
    }
  }
`;
export const createHistoryData = /* GraphQL */ `
  mutation CreateHistoryData(
    $input: CreateHistoryDataInput!
    $condition: ModelHistoryDataConditionInput
  ) {
    createHistoryData(input: $input, condition: $condition) {
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
export const updateHistoryData = /* GraphQL */ `
  mutation UpdateHistoryData(
    $input: UpdateHistoryDataInput!
    $condition: ModelHistoryDataConditionInput
  ) {
    updateHistoryData(input: $input, condition: $condition) {
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
export const deleteHistoryData = /* GraphQL */ `
  mutation DeleteHistoryData(
    $input: DeleteHistoryDataInput!
    $condition: ModelHistoryDataConditionInput
  ) {
    deleteHistoryData(input: $input, condition: $condition) {
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
export const createUserHistoryData = /* GraphQL */ `
  mutation CreateUserHistoryData(
    $input: CreateUserHistoryDataInput!
    $condition: ModelUserHistoryDataConditionInput
  ) {
    createUserHistoryData(input: $input, condition: $condition) {
      username
      unixtime
      cocktailname
      cocktaildegree
      cupcapacity
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const updateUserHistoryData = /* GraphQL */ `
  mutation UpdateUserHistoryData(
    $input: UpdateUserHistoryDataInput!
    $condition: ModelUserHistoryDataConditionInput
  ) {
    updateUserHistoryData(input: $input, condition: $condition) {
      username
      unixtime
      cocktailname
      cocktaildegree
      cupcapacity
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const deleteUserHistoryData = /* GraphQL */ `
  mutation DeleteUserHistoryData(
    $input: DeleteUserHistoryDataInput!
    $condition: ModelUserHistoryDataConditionInput
  ) {
    deleteUserHistoryData(input: $input, condition: $condition) {
      username
      unixtime
      cocktailname
      cocktaildegree
      cupcapacity
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const createDegreeHistoryData = /* GraphQL */ `
  mutation CreateDegreeHistoryData(
    $input: CreateDegreeHistoryDataInput!
    $condition: ModelDegreeHistoryDataConditionInput
  ) {
    createDegreeHistoryData(input: $input, condition: $condition) {
      unixtime
      cockdegree
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const updateDegreeHistoryData = /* GraphQL */ `
  mutation UpdateDegreeHistoryData(
    $input: UpdateDegreeHistoryDataInput!
    $condition: ModelDegreeHistoryDataConditionInput
  ) {
    updateDegreeHistoryData(input: $input, condition: $condition) {
      unixtime
      cockdegree
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const deleteDegreeHistoryData = /* GraphQL */ `
  mutation DeleteDegreeHistoryData(
    $input: DeleteDegreeHistoryDataInput!
    $condition: ModelDegreeHistoryDataConditionInput
  ) {
    deleteDegreeHistoryData(input: $input, condition: $condition) {
      unixtime
      cockdegree
      liqml
      mixml
      createdAt
      updatedAt
    }
  }
`;
export const createCocktailData = /* GraphQL */ `
  mutation CreateCocktailData(
    $input: CreateCocktailDataInput!
    $condition: ModelCocktailDataConditionInput
  ) {
    createCocktailData(input: $input, condition: $condition) {
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
export const updateCocktailData = /* GraphQL */ `
  mutation UpdateCocktailData(
    $input: UpdateCocktailDataInput!
    $condition: ModelCocktailDataConditionInput
  ) {
    updateCocktailData(input: $input, condition: $condition) {
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
export const deleteCocktailData = /* GraphQL */ `
  mutation DeleteCocktailData(
    $input: DeleteCocktailDataInput!
    $condition: ModelCocktailDataConditionInput
  ) {
    deleteCocktailData(input: $input, condition: $condition) {
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
