export interface User {
  id: string;
  password: string;
  role: string;
  name: string;
  unit: string[];
  maxCount: number;
}

export interface ResultVO {
  code: number;
  message?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data?: any;
}
