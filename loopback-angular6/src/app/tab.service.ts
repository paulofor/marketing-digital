// tab-service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  selectedTab: number = 1;
  currentObjectId: number | null = null; // Armazena o ID do objeto atual

  constructor() { }

  selectTab(tabNumber: number) {
    this.selectedTab = tabNumber;
  }

  setCurrentObjectId(id: number) {
    this.currentObjectId = id;
  }

  getCurrentObjectId() {
    return this.currentObjectId;
  }
}
