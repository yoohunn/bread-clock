import type { Bakery, BakeryDetail, BakerySearchParams } from '@/models';
import { Service } from '@/services/index';

class BakeryService extends Service {
  async search(searchParams?: BakerySearchParams) {
    const params = new URLSearchParams(searchParams).toString();
    const queryString = params ? `?${params}` : '';
    console.log('🌟🌟🌟🌟queryString: ', queryString);

    const res = await this.client.get<BakeryDetail[]>(
      `/bakeries${queryString}`,
    );
    return res.data;
  }

  async getBakeries() {
    const res = await this.client.get<BakeryDetail[]>('/bakeries');
    return res.data;
  }

  async getBakery(id: string) {
    const res = await this.client.get<BakeryDetail>(`/bakeries/${id}`);
    return res.data;
  }
}
export const bakeryService = new BakeryService();
