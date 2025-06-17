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
    description: "With expert hands and a keen eye for detail, she brings out the best in every haircut and color. From subtle layers to bold transformations, her goal is to help you feel confident and radiant—inside and out."
  },
  manicurist: {
    photo: "/images/about-images/team/team-2.webp",
    alt: "alt",
    name: "Elizabeth Graham",
    job: "Manicurist",
    description: "Precision and polish are her trademarks. She creates elegant, lasting nail designs that suit every mood or occasion, always with attention to health, hygiene, and your personal style."
  },
  esthetician: {
    photo: "/images/about-images/team/team-3.webp",
    alt: "alt",
    name: "Lara O'Donnell",
    job: "Esthetician",
    description: "Passionate about skincare, she offers rejuvenating treatments that nourish and renew. Her calm presence and deep knowledge make each session a peaceful escape for your skin and spirit."
  },
  pedicurist: {
    photo: "/images/about-images/team/team-4.webp",
    alt: "alt",
    name: "Nuria Garolli",
    job: "Pedicurist",
    description: "From classic care to luxurious treatments, she ensures your feet feel pampered and healthy. Her relaxing touch and eye for detail create an unmatched experience."
  },
  masseuse: {
    photo: "/images/about-images/team/team-5.webp",
    alt: "alt",
    name: "Stephania Catterfeld",
    job: "Masseuse",
    description: "With a soothing touch and a deep understanding of anatomy, she tailors each massage to relieve tension, restore balance, and bring lasting wellness to both body and mind."
  },
  makeupArtist: {
    photo: "/images/about-images/team/team-6.webp",
    alt: "alt",
    name: "Fabiana Lorenzetti",
    job: "Makeup Artist",
    description: "Whether it's for a photoshoot, special occasion, or just because, she brings out your natural beauty with skillful makeup artistry—always enhancing, never masking."
  }
}