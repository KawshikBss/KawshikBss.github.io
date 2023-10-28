interface ISubsectionItem {
  label: string;
  icon: React.FunctionComponent;
  href: string;
  location?: string;
  role?: string;
  program?: string;
  duration: string;
  content: string[];
}

interface ISubsection {
  label: string;
  content?: string[];
  sections?: ISubsectionItem[];
}

interface ISection {
  label: string;
  sections: ISubsection[];
}
