export interface ITeamMember {
  photo: string;
  alt: string;
  name: string;
  job: string;
  description: string;
}

export interface ITeamMembers {
  hairStylist: ITeamMember;
  manicurist: ITeamMember;
  esthetician: ITeamMember;
  pedicurist: ITeamMember;
  masseuse: ITeamMember;
  makeupArtist: ITeamMember;
}
