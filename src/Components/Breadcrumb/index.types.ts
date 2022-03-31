export interface LinkProps {
  url: string;
  title: string;
}

export interface BreadcrumbProps {
  links: LinkProps[] | [];
}
