export interface RocketInfo {
  rocketId: string;
  rocketName: string;
}

export interface LaunchInfo {
  flightNumber: number;
  missionName: string;
  launchDateUnix: number;
  rocket: RocketInfo;
  launchSuccess: boolean;
  links: {
    flickrImages: string[];
  };
  details: string;
  upcoming: boolean;
}
