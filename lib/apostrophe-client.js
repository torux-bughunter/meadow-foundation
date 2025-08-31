import { config } from './config';

// ApostropheCMS API Client
const APOSTROPHE_API_URL = config.apostropheUrl;

export class ApostropheClient {
  constructor() {
    this.baseUrl = APOSTROPHE_API_URL;
  }

  // Fetch all blog posts
  async getBlogPosts() {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1/blog-post?perPage=100`);
      if (!response.ok) throw new Error('Failed to fetch blog posts');
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

  // Fetch a single blog post by slug
  async getBlogPost(slug) {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1/blog-post?slug=${slug}`);
      if (!response.ok) throw new Error('Failed to fetch blog post');
      const data = await response.json();
      return data.results?.[0] || null;
    } catch (error) {
      console.error('Error fetching blog post:', error);
      return null;
    }
  }

  // Fetch all initiatives
  async getInitiatives() {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1/initiative?perPage=100`);
      if (!response.ok) throw new Error('Failed to fetch initiatives');
      const data = await response.json();
      return data.results || [];
    } catch (error) {
      console.error('Error fetching initiatives:', error);
      return [];
    }
  }

  // Fetch a single initiative by slug
  async getInitiative(slug) {
    try {
      const response = await fetch(`${this.baseUrl}/api/v1/initiative?slug=${slug}`);
      if (!response.ok) throw new Error('Failed to fetch initiative');
      const data = await response.json();
      return data.results?.[0] || null;
    } catch (error) {
      console.error('Error fetching initiative:', error);
      return [];
    }
  }

  // Fetch team members (placeholder - module doesn't exist yet)
  async getTeamMembers() {
    try {
      // For now, return empty array since team-member module doesn't exist
      return [];
    } catch (error) {
      console.error('Error fetching team members:', error);
      return [];
    }
  }

  // Fetch impact metrics (placeholder - module doesn't exist yet)
  async getImpactMetrics() {
    try {
      // For now, return empty array since impact-metric module doesn't exist
      return [];
    } catch (error) {
      console.error('Error fetching impact metrics:', error);
      return [];
    }
  }
}

export const apostropheClient = new ApostropheClient();
