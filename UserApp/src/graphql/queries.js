/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      email
      orders {
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
          carId
          updatedAt
          authorId
        }
        nextToken
      }
      car {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
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
      createdAt
      updatedAt
      authorId
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $id: ID
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listUsers(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        username
        email
        orders {
          nextToken
        }
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
        createdAt
        updatedAt
        authorId
      }
      nextToken
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
      orders {
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
          carId
          updatedAt
          authorId
        }
        nextToken
      }
      driverId
      driver {
        id
        username
        email
        orders {
          nextToken
        }
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
export const listCars = /* GraphQL */ `
  query ListCars(
    $id: ID
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
    $sortDirection: ModelSortDirection
  ) {
    listCars(
      id: $id
      filter: $filter
      limit: $limit
      nextToken: $nextToken
      sortDirection: $sortDirection
    ) {
      items {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
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
      nextToken
    }
  }
`;
export const driverId = /* GraphQL */ `
  query DriverId(
    $driverId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelCarFilterInput
    $limit: Int
    $nextToken: String
  ) {
    driverId(
      driverId: $driverId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        latitude
        longitude
        heading
        isActive
        orders {
          nextToken
        }
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
      nextToken
    }
  }
`;
export const getOrder = /* GraphQL */ `
  query GetOrder($id: ID!) {
    getOrder(id: $id) {
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
        orders {
          nextToken
        }
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
        orders {
          nextToken
        }
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
export const userId = /* GraphQL */ `
  query UserId(
    $userId: ID
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
export const carId = /* GraphQL */ `
  query CarId(
    $carId: ID
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelOrderFilterInput
    $limit: Int
    $nextToken: String
  ) {
    carId(
      carId: $carId
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
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
