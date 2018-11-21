import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

    constructor() {
    }

    store(key: string, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    retrieve(key: string) {
        return JSON.parse(localStorage.getItem(key));
    }
}