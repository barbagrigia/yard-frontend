/* @flow */

export type LocationType = {
  latitude?: number,
  localityId?: number,
  subLocalityName?: string,
  subwayIds?: Array<number>,
  countryName?: string,
  longitude?: number,
  postalCode?: number,
  countryId?: number,
  house?: number,
  localityName?: string,
  street?: string,
  regionId?: number,
  regionName?: string,
};

export type ImagesType = Array<{
  id: string,
  isPublic: boolean,
}>;

export type StatisticsType = {
  resalePropertiesCount?: number,
  price?: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  totalResaleArea?: {
    from: number,
    to: number,
  },
  resalePrice?: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  propertiesCount?: number,
  totalPrimaryArea?: {
    from: number,
    to: number,
  },
  primaryPrice?: {
    from: {
      usd: number,
      eur: number,
      rub: number,
    },
    to: {
      usd: number,
      eur: number,
      rub: number,
    },
  },
  primaryPropertiesCount?: number,
  totalArea?: {
    from: number,
    to: number,
  },
};

export type DetailsType = {
  architect?: string,
  developer?: string,
  startYear?: number,
  startQuarter?: string,
  commissioningYear?: number,
  commissioningQuarter?: string,
  ceilHeight?: {
    to: number,
    from: number,
  },
  parkings?: number,
  maintenanceCosts?: number,
  propertyKind?: string,
  security?: string,
  undergroundGarages?: string,
  constructionKind?: string,
};

export type AmenitiesType = Array<string>;

export type ComplexType = {
  commissioningYear: number,
  adjacentTerritory: {
    area: number,
    isAccessOpen: boolean,
    isAllowedCars: boolean,
    isGreeneryPlanted: boolean,
    playgrounds: number,
  },
  name: string,
  updatedAt: string,
  location: LocationType,
  state: string,
  units: number,
  amenities: AmenitiesType,
  details: DetailsType,
  statistics: StatisticsType,
  keysIssueDate: string,
  purchaseTimeConditions: {
    agreementPreparation: number,
    oralReservation: number,
  },
  commissioningQuarter: number,
  fullDescription: string,
  shortDescription: string,
  linkedContactIds: Array<string>,
  responsibleUser: {
    id: number,
    departmentId: number,
  },
  createdByUserId: number,
  id: number,
  updatedByUserId: number,
  createdAt: string,
  images: ImagesType,
  accreditors: Array<number>,
};
