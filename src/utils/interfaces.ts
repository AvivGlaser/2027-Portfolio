import { JSX } from "react";

export interface ILogo {
  img: string;
  title: string;
  alt: string;
  className?: string;
}

export interface IAccessibilityMenu {
  isVisible: boolean;
  setIsVisible: Function;
}

export interface IAccessibilityButtons {
  label: string;
  type: string;
  class: string;
  ariaLabel: string;
}

export interface ILinks {
  href: string;
  icon: JSX.Element;
  label: string;
  hiddenText?: string;
}

export interface INavLink {
  href: string;
  label: string;
}

export interface ISocialLink extends INavLink {
  className: string;
  icon: JSX.Element;
}

export interface IRecommendation {
  name: string;
  role: string;
  text: string;
  img: string;
  letter: string;
  hiddenText?: string;
}

export interface IActivities {
  id: number;
  title: string;
  description: string;
  icon: JSX.Element;
  link?: string;
  hiddenText?: string;
  short?: string;
}

export interface IProjectsData {
  title: string;
  description: string;
  link?: string;
  imgUrl: string;
  alt: string;
  section: "GitHub" | "Deployed" | "Future";
}

interface ITimeLineBase {
  id: number;
  title: string;
  description: string;
  buttonText: string;
  date: string;
  location: string;
  image?: string;
  alt?: string;
  href?: string;
  hiddenText?: string;
  secondButtonText?: string;
  secondHref?: string;
  secondHiddenText?: string;
}

// Only study entries carry a completion status; work entries can't have one
export type ITimeLineElements = ITimeLineBase &
  ({ icon: "work"; done?: never } | { icon: "school"; done: boolean });
