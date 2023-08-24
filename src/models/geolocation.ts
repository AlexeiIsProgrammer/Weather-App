export interface Geolocation {
  ip: string;
  hostname: string;
  city: string;
  region: string;
  country: string;
  loc: string;
  postal: string;
  timezone: string;
  asn: Asn;
  company: Company;
  privacy: Privacy;
  abuse: Abuse;
  domains: Domains;
}

export interface Abuse {
  address: string;
  country: string;
  email: string;
  name: string;
  network: string;
  phone: string;
}

export interface Asn {
  asn: string;
  name: string;
  domain: string;
  route: string;
  type: string;
}

export interface Company {
  name: string;
  domain: string;
  type: string;
}

export interface Domains {
  page: number;
  total: number;
  domains: any[];
}

export interface Privacy {
  vpn: boolean;
  proxy: boolean;
  tor: boolean;
  relay: boolean;
  hosting: boolean;
  service: string;
}
