/* eslint-disable */
// this is an auto generated file. This will be overwritten

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
