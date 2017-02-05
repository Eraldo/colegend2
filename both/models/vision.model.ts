import { CollectionObject } from './collection-object.model';

export interface Vision extends CollectionObject {
  content: string;
  owner: string;
}