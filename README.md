# Open Source Project Directory API

API for retrieving and searching trending GitHub projects by stars, license type, and other parameters.

## Version: 1.0.0

### Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Endpoints](#endpoints)
  - [/search/repositories](#1-searchrepositories)
  - [/search/repositories/all](#2-searchrepositoriesall)
  - [/search/repositories/license](#3-searchrepositorieslicense)
  - [/search/repositories/search](#4-searchrepositoriessearch)
- [Installation](#installation)
- [License](#license)

---

### Introduction

The Open Source Project Directory API allows users to retrieve and search for popular GitHub projects based on specific filters, such as stars and license type.

### Features

- Fetch trending projects with over 10,000 stars.
- Filter projects by license type.
- Paginated list support for easy navigation.
- Sort results by various parameters, including stars.

### Getting Started

To use the API, clone the repository and follow the setup instructions below.

### Endpoints

#### 1. `/search/repositories`

- **Method:** `GET`
- **Summary:** Fetch Trending Projects
- **Description:** Retrieves trending GitHub projects with over 10,000 stars under the MIT license.
  
  **Parameters**
  | Name  | Location | Description  | Required | Type |
  |-------|----------|--------------|----------|------|
  | `q`   | query    | Search query to filter projects | Yes | string |
  | `sort` | query   | Sort results by "stars" | No | string |

  **Responses**
  - `200`: A list of trending projects.
  - `500`: Server error while fetching projects.

---

#### 2. `/search/repositories/all`

- **Method:** `GET`
- **Summary:** Fetch All Projects
- **Description:** Retrieves a paginated list of all projects sorted by stars.
  
  **Parameters**
  | Name      | Location | Description                   | Required | Type    |
  |-----------|----------|-------------------------------|----------|---------|
  | `q`       | query    | Query string                  | Yes      | string  |
  | `sort`    | query    | Sorting criteria              | No       | string  |
  | `order`   | query    | Order (e.g., asc/desc)        | No       | string  |
  | `per_page`| query    | Number of results per page    | No       | integer |
  | `page`    | query    | Page number to retrieve       | No       | integer |

  **Responses**
  - `200`: A paginated list of all projects.
  - `500`: Server error while fetching projects.

---

#### 3. `/search/repositories/license`

- **Method:** `GET`
- **Summary:** Fetch Projects by License
- **Description:** Retrieves projects filtered by license type, sorted by stars.
  
  **Parameters**
  | Name      | Location | Description                      | Required | Type    |
  |-----------|----------|----------------------------------|----------|---------|
  | `q`       | query    | License filter query             | Yes      | string  |
  | `sort`    | query    | Sorting criteria                 | No       | string  |
  | `order`   | query    | Order (e.g., asc/desc)           | No       | string  |
  | `per_page`| query    | Number of results per page       | No       | integer |
  | `page`    | query    | Page number to retrieve          | No       | integer |

  **Responses**
  - `200`: List of projects filtered by license.
  - `500`: Server error while fetching projects.

---

#### 4. `/search/repositories/search`

- **Method:** `GET`
- **Summary:** Search Projects with Optional License Filter
- **Description:** Search for projects based on a query, with an optional license filter.
  
  **Parameters**
  | Name      | Location | Description                   | Required | Type    |
  |-----------|----------|-------------------------------|----------|---------|
  | `q`       | query    | Search query                  | Yes      | string  |
  | `license` | query    | Optional license filter       | No       | string  |
  | `sort`    | query    | Sorting criteria              | No       | string  |
  | `order`   | query    | Order (e.g., asc/desc)        | No       | string  |
  | `per_page`| query    | Number of results per page    | No       | integer |
  | `page`    | query    | Page number to retrieve       | No       | integer |

  **Responses**
  - `200`: Search results matching the query and optional license filter.
  - `500`: Server error while searching projects.

---

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/temic137/open__projects.git
   ```
2. Install dependencies:
   ```bash
   cd open__projects
   npm install
   ```

3. Start the server:
   ```bash
   npm start
   ```

### License

This project is licensed under the [GPL License](https://www.gnu.org/licenses/gpl-3.0.html).


# Openprojects

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.11.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
"# openprojects" 
"# openprojects" 
"# openprojects1" 
"# openprojects1" 
"# open_projects" 
"# open_projects" 
"# open_projects" 
"# open_projects" 
"# open__projects" 
"# open__projects" 
"# open__projects" 
"# open__projects" 
