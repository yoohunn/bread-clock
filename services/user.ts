import { Service } from '@/services/index';
import { User } from '@/models';
import { tokenStorage } from '@/utils/token';

class UserService extends Service {
  async me() {
    if (this.tokenStorage.access) {
      return undefined;
    }

    return this.client.get<User>(`/auth/me`);
  }

  async addToFavorite(bakeryId: string) {
    await this.client.put(`/bakeries/${bakeryId}/favorite`);
  }
  async removeFavorite(bakeryId: string) {
    await this.client.delete(`/bakeries/${bakeryId}/favorite`);
  }
}

export const userService = new UserService();
