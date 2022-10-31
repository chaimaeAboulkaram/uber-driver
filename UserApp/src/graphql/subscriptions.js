/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onOrderUpdated = /* GraphQL */ `
  subscription OnOrderUpdated($id: ID!) {
    onOrderUpdated(id: $id) {
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
export const onCarUpdated = /* GraphQL */ `
  subscription OnCarUpdated($id: ID!) {
    onCarUpdated(id: $id) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($authorId: String) {
    onCreateUser(authorId: $authorId) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($authorId: String) {
    onUpdateUser(authorId: $authorId) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($authorId: String) {
    onDeleteUser(authorId: $authorId) {
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
export const onCreateCar = /* GraphQL */ `
  subscription OnCreateCar($authorId: String) {
    onCreateCar(authorId: $authorId) {
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
export const onUpdateCar = /* GraphQL */ `
  subscription OnUpdateCar($authorId: String) {
    onUpdateCar(authorId: $authorId) {
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
export const onDeleteCar = /* GraphQL */ `
  subscription OnDeleteCar($authorId: String) {
    onDeleteCar(authorId: $authorId) {
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
export const onCreateOrder = /* GraphQL */ `
  subscription OnCreateOrder($authorId: String) {
    onCreateOrder(authorId: $authorId) {
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
export const onUpdateOrder = /* GraphQL */ `
  subscription OnUpdateOrder($authorId: String) {
    onUpdateOrder(authorId: $authorId) {
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
export const onDeleteOrder = /* GraphQL */ `
  subscription OnDeleteOrder($authorId: String) {
    onDeleteOrder(authorId: $authorId) {
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
