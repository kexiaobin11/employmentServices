import {User} from './user';

export interface JobSeeker {
  id: number;
  user: User;
  age: number;
  contact: string;
  // 期望薪资
  exceptWorkCompany: string;
  // 期待岗位
  exceptWorkJobName: string;
  // 期待工资
  exceptWorkSalary: string;
  // 备注
  remark: string;
}
