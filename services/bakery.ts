import type { Bakery, BakeryDetail, BakerySearchParams } from '@/models';
import { Service } from '@/services/index';

class BakeryService extends Service {
  async search(searchParams?: BakerySearchParams) {
    const params = new URLSearchParams(searchParams).toString();
    const queryString = params ? `?${params}` : '';
    console.log('🌟🌟🌟🌟queryString: ', queryString);

    return await this.client.fetch<Bakery[]>(`/bakeries${queryString}`);
  }

  async getBakeries() {
    return await this.client.fetch<Bakery[]>('/bakeries');
  }

  async getBakery(id: string) {
    return await this.client.fetch<BakeryDetail>(`/bakeries/${id}`);
  }
}
export const bakeryService = new BakeryService();
