import type { Bakery, BakeryDetail, BakeryParams } from '@/models';
import { Service } from '@/services/index';
import { UpdateBreadSoldoutRequest } from '@/models';

class BakeryService extends Service {
  async search(searchParams?: BakeryParams) {
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

  async updateSoldoutBreads(id: string, body: UpdateBreadSoldoutRequest) {
    await this.client.put(`/bakeries/${id}/breads/availability`, body);
  }
}
export const bakeryService = new BakeryService();
