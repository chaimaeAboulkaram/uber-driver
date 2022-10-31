export const getCarId = /* GraphQL */ `
  query getCar($id: ID!) {
    getCar(id: $id) {
      id
    }
  }
`;

export const getCar = /* GraphQL */ `
  query GetCar($id: ID!) {
    getCar(id: $id) {
      id
      type
      latitude
      longitude
      heading
      isActive

      driverId
      driver {
        id
        username
        email
        createdAt
        updatedAt
        authorId
      }
      createdAt
      updatedAt
      authorId
    }
  }
`;

export const listOrders = /* GraphQL */ `
  query ListOrders(
    $id: ID
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listOrders(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        createdAt
        type
        status
        originLatitude
        oreiginLongitude
        destLatitude
        destLongitude
        userId
        user {
          id
          username
          email
          createdAt
          updatedAt
          authorId
        }
        carId
        car {
          id
          type
          latitude
          longitude
          heading
          isActive
          driverId
          createdAt
          updatedAt
          authorId
        }
        updatedAt
        authorId
      }
      nextToken
    }
  }
`;