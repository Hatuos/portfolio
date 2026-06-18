import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  get(key: string): string | null {
    try {
      return sessionStorage.getItem(key);
    } catch {
      return null;
    }
  }

  set(key: string, value: string): void {
    try {
      sessionStorage.setItem(key, value);
    } catch {
      // Ignore storage errors
    }
  }

  remove(key: string): void {
    try {
      sessionStorage.removeItem(key);
    } catch {
      // Ignore storage errors
    }
  }
}
