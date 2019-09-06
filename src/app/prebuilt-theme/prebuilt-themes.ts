import { Theme } from '../theme-model';

const PREBUILT_THEMES = [
  {
    'name': 'deeppurple-amber',
    palette: {
      'primaryColor': '#673AB7',
      'accentColor': '#ffd740',
      'primaryLightColor': '#d1c4e9',
      'primaryDarkColor': '#512da8',
      'accentLightColor': '#ffe57f',
      'accentDarkColor': '#ffc400',
      'primaryColorText': '#ffffff',
      'primaryLightColorText': 'rgba(0,0,0,0.87)',
      'primaryDarkColorText': '#ffffff',
      'accentColorText': 'rgba(0,0,0,0.87)',
      'accentLightColorText': 'rgba(0,0,0,0.87)',
      'accentDarkColorText': '#ffffff',
    },
    'isPreBuilt': true
  },
  {
    'name': 'indigo-pink',
    palette: {
      'primaryColor': '#3f51b5',
      'primaryLightColor': '#c5cae9',
      'primaryDarkColor': '#303f9f',
      'accentColor': '#ff4081',
      'accentLightColor': '#ff80ab',
      'accentDarkColor': '#f50057',
      'primaryColorText': '#ffffff',
      'primaryLightColorText': 'rgba(0,0,0,0.87)',
      'primaryDarkColorText': '#ffffff',
      'accentColorText': 'rgba(0,0,0,0.87)',
      'accentLightColorText': 'rgba(0,0,0,0.87)',
      'accentDarkColorText': '#ffffff',
    },
    'isPreBuilt': true
  },
  {
    'name': 'pink-bluegrey',
    palette: {
      'primaryColor': '#e91e63',
      'primaryLightColor': '#f8bbd0',
      'primaryDarkColor': '#c2185b',
      'primaryColorText': '#ffffff',
      'primaryLightColorText': 'rgba(0,0,0,0.87)',
      'primaryDarkColorText': '#ffffff',
      'accentColor': '#b0bec5',
      'accentLightColor': '#cfd8dc',
      'accentDarkColor': '#78909c',
      'accentColorText': 'rgba(0,0,0,0.87)',
      'accentLightColorText': 'rgba(0,0,0,0.87)',
      'accentDarkColorText': '#ffffff',
    },
    'isPreBuilt': true,
    'isDark': true,
  },
  {
    'name': 'purple-green',
    palette: {
      'primaryColor': '#9c27b0',
      'primaryLightColor': '#e1bee7',
      'primaryDarkColor': '#7b1fa2',
      'primaryColorText': '#ffffff',
      'primaryLightColorText': 'rgba(0,0,0,0.87)',
      'primaryDarkColorText': '#ffffff',
      'accentColor': '#ffd740',
      'accentLightColor': '#ffe57f',
      'accentDarkColor': '#ffc400',
      'accentColorText': 'rgba(0,0,0,0.87)',
      'accentLightColorText': 'rgba(0,0,0,0.87)',
      'accentDarkColorText': '#ffffff',
    },
    'isPreBuilt': true,
    'isDark': true,
  }
] as Theme[];

export default PREBUILT_THEMES;
