export interface InfoProps {
  title: string;
  endDate: string;
  description: string;
  stacks: Array<string>;
}

export interface AccordeonInfoProps {
  info: InfoProps;
  linkTo: string;
}
