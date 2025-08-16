export interface RadioStation {
  id: string;
  name: string;
  url: string;
  genre: string;
  country: string;
  language: string;
  description?: string;
  logo?: string;
  isFavorite?: boolean;
}

export interface PlaybackState {
  isPlaying: boolean;
  currentStation: RadioStation | null;
  volume: number;
  isMuted: boolean;
}

export interface User {
  id: string;
  name: string;
  email: string;
  preferences: UserPreferences;
}

export interface UserPreferences {
  language: string;
  theme: 'light' | 'dark' | 'auto';
  autoPlay: boolean;
  volume: number;
  favoriteGenres: string[];
}

export type Language = 'en' | 'ko';

export interface LanguageOption {
  code: Language;
  name: string;
  flag: string;
}