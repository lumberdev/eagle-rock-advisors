// Shared types for navigation components

export interface NavigationLink {
  label: string;
  href: string;
  isButton?: boolean;
}

export interface NavigationSubLink {
  label: string;
  href: string;
}

export interface NavigationLogo {
  src?: string | null;
  alt?: string | null;
}

export interface NavigationSection {
  logo?: NavigationLogo | null;
  links?: NavigationLink[];
  subLinks?: NavigationSubLink[];
  copyright?: string | null;
}

export interface NavigationData {
  header?: NavigationSection;
  footer?: NavigationSection;
}

// Type for the Tina response
export type TinaResponse<T> = {
  data?: {
    navigation: T;
  };
  variables: object;
  loading: boolean;
  error?: Error;
  isClient: boolean;
};

// Type for the Tina query response
export type TinaQueryResponse<T> = {
  data?: {
    navigation: T;
  } | null;
  variables: object;
  loading: boolean;
  error?: Error;
  isClient: boolean;
};

// Type for the navigation data in Tina
export type TinaNavigationData = {
  navigation: {
    header?: NavigationSection;
    footer?: NavigationSection;
  };
};
