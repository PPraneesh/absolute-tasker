export interface WorkType {
    _id: string;
    name: string;
    date: string;
    location: string;
    workType: string;
    status: string;
    offersCount: number;
    pay: number;
    description?:string;
}