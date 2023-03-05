type HasId = {
  id: string;
};

export type ProtoUserStructure = {
  email: string;
  userName: string;
  password: string;
  friends: UserStructure[];
  enemies: UserStructure[];
};

export type UserStructure = HasId & ProtoUserStructure;
