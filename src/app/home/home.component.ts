import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GithubService } from '../github.service';

interface Project {
  name: string;
  description: string;
  license?: string;
  html_url?: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  image_url?: string; 
  owner?: {
    avatar_url: string; 
  };
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  trendingProjects: Project[] = [];
  loading = false;

  constructor(private githubService: GithubService) {}

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

  openGitHub(name: string) {
    const project = this.trendingProjects.find(p => p.name === name);
    if (project?.html_url) {
      window.open(project.html_url, '_blank');
    }
  }
}
