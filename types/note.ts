export interface Note {
    id: number;
    title: string;
    content: string;
    tag: string;
    createdAt: string;
    updatedAt: string;
}
     
export interface Category {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  }


 export type Tag = 'Todo' | 'Work' | 'Personal' | 'Meeting' | 'Shopping';
 