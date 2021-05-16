import { MenuItem } from './../_models/menuItem';

export class Restaurant{
  restaurant_id: number;
  restaurant_owner: string;
  restaurantname: string;
  owner_id: number;
  avg_rating: number;
  region_name: string;
  menu: MenuItem[];
}