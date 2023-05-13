export interface Users {
  id: number;
  username: string;
  nickname: string;
  profileImage: string | null;
}
export interface UserData {
  createdAt: string;
  documentNum: string;
  nickname: string;
  profileImageUrl: string;
  username: string;
}
export interface Notices {
  content: string;
  createdAt: string;
  id: number;
  imageUrl: string | null;
  modifiedAt: string;
  title: string;
  users: Users;
}
export interface Workspaces {
  content: string;
  createdAt: string;
  createdBy: {
    id: number;
    username: string;
    nickname: string;
    profileImage: string;
    social: 'KAKAO' | 'STANDARD';
  };
  id: number;
  documentCreatedAt: string;
  documentTitle: string;
  imageUrl: string;
  scheduleContent: string;
  scheduleCreatedAt: string;
  title: string;
}
export interface WorkspacesData {
  data: [
    {
      notices: Notices;
      workspaces: Workspaces;
    },
  ];
}
