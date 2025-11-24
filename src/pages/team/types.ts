export interface TeamMember {
  name: string;
  title: string;
  avatar: string | { url: string };
  bio: string;
  social: {
    facebook?: string;
    instagram?: string;
    linkedin?: string;
    [key: string]: string | undefined;
  };
  role?: string;
  url?: string;
  description?: string;
}
