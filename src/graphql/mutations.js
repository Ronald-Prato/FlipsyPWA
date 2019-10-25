/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
export const createCubeRun = `mutation CreateCubeRun($input: CreateCubeRunInput!) {
  createCubeRun(input: $input) {
    id
    size
    time
  }
}
`;
export const updateCubeRun = `mutation UpdateCubeRun($input: UpdateCubeRunInput!) {
  updateCubeRun(input: $input) {
    id
    size
    time
  }
}
`;
export const deleteCubeRun = `mutation DeleteCubeRun($input: DeleteCubeRunInput!) {
  deleteCubeRun(input: $input) {
    id
    size
    time
  }
}
`;
