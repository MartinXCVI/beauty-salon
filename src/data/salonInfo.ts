import type { IBusinessHours } from "@interfaces/IBusinessHours"
import type { ISalonData } from "@interfaces/ISalonData"
import type { ITeamMembers } from "@interfaces/ITeamMember"

export const businessHours: IBusinessHours = {
  monday: "9:30 - 16:30",
  tuesday: "9:30 - 16:30",
  wednesday: "9:30 - 16:30",
  thursday: "9:30 - 18:00",
  friday: "9:30 - 18:00",
  saturday: "9:30 - 13:30",
  sunday: "CLOSED"
}


export const salonData: ISalonData = {
  name: "Beauty Salon",
  address: "Some Avenue, 123",
  city: "City Name",
  state: "State Name",
  email: "beautysalon@gmail.com",
  phone: "123 456 - 7890",
  facebook: "www.facebook.com",
  instagram: "www.instagram.com",
  pinterest: "www.pinterest.com",
  youtube: "www.youtube.com"
}


export const teamMembers: ITeamMembers = {
  hairStylist: {
    photo: "/images/about-images/team/team-1.webp",
    alt: "alt",
    name: "Gloria Adams",
    job: "Hair Stylist",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur quaerat."
  },
  manicurist: {
    photo: "/images/about-images/team/team-2.webp",
    alt: "alt",
    name: "Elizabeth Graham",
    job: "Manicurist",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur quaerat."
  },
  esthetician: {
    photo: "/images/about-images/team/team-3.webp",
    alt: "alt",
    name: "Lara O'Donnell",
    job: "Esthetician",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur quaerat."
  },
  pedicurist: {
    photo: "/images/about-images/team/team-4.webp",
    alt: "alt",
    name: "Nuria Garolli",
    job: "Pedicurist",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur quaerat."
  },
  masseuse: {
    photo: "/images/about-images/team/team-5.webp",
    alt: "alt",
    name: "Stephania Catterfeld",
    job: "Masseuse",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur quaerat."
  },
  makeupArtist: {
    photo: "/images/about-images/team/team-6.webp",
    alt: "alt",
    name: "Fabiana Lorenzetti",
    job: "Makeup Artist",
    description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione reiciendis consequuntur quaerat."
  }
}