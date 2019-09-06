export interface Theme {
  name?: string;
  palette: Palette;
  // set to true in case this is prebuilt theme.
  // During export we will use this flag to just show include or full customize
  isPreBuilt?: boolean;
  isDark?: boolean;
}

export interface Palette {
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  accentColor: string;
  accentLightColor: string;
  accentDarkColor: string;
  primaryColorText: string;
  primaryLightColorText: string;
  primaryDarkColorText: string;
  accentColorText: string;
  accentLightColorText: string;
  accentDarkColorText: string;
}
