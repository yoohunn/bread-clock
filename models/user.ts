import { Service } from '@/services';

class UserService extends Service {
  async addToFavorite(bakeryId: string) {
    return await this.client.put(`/bakeries/${bakeryId}/favorite`);
  }
  async removeFavorite(bakeryId: string) {
    return await this.client.delete(`/bakeries/${bakeryId}/favorite`);
  }
}

export const userService = new UserService();
