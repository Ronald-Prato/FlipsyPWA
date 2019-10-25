/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    nickname
    email
    maincube
    times {
      id
      size
      time
    }
    average_time
    pb
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      nickname
      email
      maincube
      times {
        id
        size
        time
      }
      average_time
      pb
    }
    nextToken
  }
}
`;
export const getCubeRun = `query GetCubeRun($id: ID!) {
  getCubeRun(id: $id) {
    id
    size
    time
  }
}
`;
export const listCubeRuns = `query ListCubeRuns(
  $filter: ModelCubeRunFilterInput
  $limit: Int
  $nextToken: String
) {
  listCubeRuns(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      size
      time
    }
    nextToken
  }
}
`;
