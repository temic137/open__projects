import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from '../environments/environment.development';

const githubToken = environment.githubToken;  // Access the token from the environment

console.log(githubToken); 
@Injectable({
  providedIn: 'root'
})
export class GithubService {
  constructor() { }


  
  private api = axios.create({
    baseURL: environment.githubApiUrl,
    headers: {Authorization: `Bearer ${environment.githubToken}`, },
  });

  // private api = axios.create({
  //   baseURL: process.env['GITHUB_API_URL'],
  //   headers: { Authorization: `Bearer ${process.env['GITHUB_TOKEN']}` },
  // });
  

  // // Fetch trending projects
  // async fetchTopTrendingProjects() {
  //   try {
  //     const response = await this.api.get('/search/repositories', {
  //       params: {
  //         q: 'stars:>10000 license:mit',
  //         sort: 'stars',
  //       },
  //     });
  //     return response.data.items;
  //   } catch (error) {
  //     console.error('Error fetching trending projects:', error);
  //     return [];
  //   }
  // }

  viewTrending() {
    return K(this, null, function*() {
        try {
            this.loading = true;
            let t = yield this.githubService.fetchTopTrendingProjects();

            if (t) { // Check if t is defined
                this.trendingProjects = t.slice(0, 6);
            } else {
                console.error("Error loading trending projects: No data returned.");
                this.trendingProjects = []; // Or display an error message
            }
        } catch (t) {
            console.error("Error loading trending projects:", t);
            this.trendingProjects = []; // Or display an error message
        } finally {
            this.loading = false;
        }
    });
}

  // Fetch all projects
  async fetchAllProjects(page = 1) {
    try {
      const response = await this.api.get('/search/repositories', {
        params: {
          q: 'stars:>0',
          sort: 'stars',
          order: 'desc',
          per_page: 20,
          page,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error fetching all projects:', error);
      return [];
    }
  }

  // Fetch projects by license
  async fetchProjectsByLicense(license: string, page = 1) {
    try {
      const response = await this.api.get('/search/repositories', {
        params: {
          q: `license:${license}`,
          sort: 'stars',
          order: 'desc',
          per_page: 20,
          page,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error(`Error fetching projects with license ${license}:`, error);
      return [];
    }
  }

  // Search projects with optional license filter
  async searchProjects(query: string, license: string = '', page = 1) {
    try {
      // Build search query
      let searchQuery = query.trim();
      
      // Add license filter if provided
      if (license) {
        searchQuery += ` license:${license}`;
      }

      const response = await this.api.get('/search/repositories', {
        params: {
          q: searchQuery,
          sort: 'stars',
          order: 'desc',
          per_page: 20,
          page,
        },
      });
      return response.data.items;
    } catch (error) {
      console.error('Error searching projects:', error);
      return [];
    }
  }
}
