import api from './axios';
import type { Apartment } from '@/lib/types';

class ApartmentApi {
  async getAllApartments(searchParams?: string) {
    const res = await api.get(`/Apartament/all${searchParams}`);
    return res.data;
  }

  async getApartmentById(id: number) {
    const res = await api.get(`/Apartament/${id}`);
    return res.data;
  }

  async createAparment(apartment: Apartment) {
    return api.post('/Apartament', apartment);
  }

  async deleteApartment(id: string) {
    return api.delete(`/Apartament/${id}`);
  }

  async updateApartment(id: number, apartment: Apartment) {
    return api.put(`/Apartament/${id}`, apartment);
  }
}

export default new ApartmentApi();
