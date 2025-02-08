// For sending emails

declare interface EmailConfig {
  service: string;
  auth: {
    user: string | undefined;
    pass: string | undefined;
  };
}

declare interface ApiResponse {
  message?: string;
  error?: string | Error;
}

// For About section

declare interface SkillItem {
  icon: string;
  name: string;
}

declare interface RatedSkillItem extends SkillItem {
  value: number;
}

declare interface GradientProps {
  from: string;
  to: string;
  deg: number;
}

declare interface SkillRow {
  icon: string;
  name: string;
  value?: number;
}

declare type CollapseTableProps = {
  title: string;
  gradient: GradientProps;
  data: SkillRow[];
};

// For Blog section

declare interface BlogArticle {
  title: string;
  tag: string;
  image: string;
}

// For Project section

declare interface ProjectValue {
  label: string;
  value: string;
}

declare interface Project {
  title: string;
  image: string;
  description: string;
  link: string;
  visitLink?: string;
  tags?: string[];
}

declare interface ProjectCardProps {
  index: number;
}

// For Contact section and email API route

declare interface SocialLink {
  icon: typeof IconBrandGithub;
  link: string;
}

declare interface FormDataType {
  email: string;
  name: string;
  message: string;
}

// For dashboard

declare interface NavbarLink {
  link: string;
  label: string;
  icon: typeof IconHome;
}

declare interface DashboardProps {
  children: React.ReactNode;
}
