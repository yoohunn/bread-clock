import { Service } from '@/services/index';

class UserService extends Service {
  async addToFavorite(bakeryId: string) {
    await this.client.put(`/bakeries/${bakeryId}/favorite`);
  }
  async removeFavorite(bakeryId: string) {
    await this.client.delete(`/bakeries/${bakeryId}/favorite`);
  }
}

export const userService = new UserService();
