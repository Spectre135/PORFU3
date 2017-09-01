import { Article } from './article';

export class Data {
    constructor(
        public dataList: Article[],
        public rowsCount: number
    ) {}
} 
