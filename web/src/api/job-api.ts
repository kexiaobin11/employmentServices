import {ApiInjector, MockApiInterface} from '@yunzhi/ng-mock-api';
import {companies} from './company-api';
import {Job} from '../entity/job';
import {Company} from '../entity/company';

export const jobList: Job[] = [
  {
    id: '1',
    name: '前端开发工程师',
    workPlace: '北京市',
    requirement: '3年以上前端开发经验，熟悉React/Vue，掌握HTML、CSS、JavaScript',
    minMonthSalary: '¥15,000',
    maxMonthSalary: '¥22,000',
    salaryDetail: '根据个人能力及经验调整薪资，享受年终奖',
    company: {
      name: 'ABC科技有限公司'
    } as Company
  },
  {
    id: '2',
    name: '产品经理',
    workPlace: '上海市',
    requirement: '3年以上产品经理经验，具备较强的沟通协调能力，能独立负责产品规划',
    minMonthSalary: '¥18,000',
    maxMonthSalary: '¥28,000',
    salaryDetail: '薪资面议，提供股票期权，福利待遇优厚',
    company: {
      name: 'XYZ互联网公司'
    } as Company
  },
  {
    id: '3',
    name: '数据分析师',
    workPlace: '深圳市',
    requirement: '2年以上数据分析经验，熟悉Python、SQL，具有较强的分析能力',
    minMonthSalary: '¥14,000',
    maxMonthSalary: '¥20,000',
    salaryDetail: '基本工资+绩效奖金，具体薪资面议',
    company: {
      name: 'DEF数据科技'
    } as Company
  },
  {
    id: '4',
    name: '后端开发工程师',
    workPlace: '广州市',
    requirement: '2年以上Java开发经验，熟悉Spring Boot，数据库优化经验',
    minMonthSalary: '¥16,000',
    maxMonthSalary: '¥24,000',
    salaryDetail: '基础薪资+项目奖金，享有年假和五险一金',
    company: {
      name: 'XYZ互联网公司'
    } as Company
  },
  {
    id: '5',
    name: 'UI/UX设计师',
    workPlace: '北京市',
    requirement: '3年以上UI/UX设计经验，熟悉设计工具如Sketch、Figma，良好的设计理念',
    minMonthSalary: '¥12,000',
    maxMonthSalary: '¥18,000',
    salaryDetail: '薪资根据经验面议，提供弹性工作制',
    company: {
      name: '未来科技'
    } as Company
  },
  {
    id: '6',
    name: 'Java开发工程师',
    workPlace: '南京市',
    requirement: '3年以上Java开发经验，熟悉Spring框架，能够独立完成系统架构设计',
    minMonthSalary: '¥20,000',
    maxMonthSalary: '¥30,000',
    salaryDetail: '固定薪资+项目奖金，享受带薪年假',
    company: {
      name: '高科集团'
    } as Company
  },
  {
    id: '7',
    name: '销售经理',
    workPlace: '上海市',
    requirement: '5年以上销售经验，具有团队管理能力，优秀的客户沟通能力',
    minMonthSalary: '¥10,000',
    maxMonthSalary: '¥15,000',
    salaryDetail: '基本薪资+销售提成，业绩优秀者可享额外奖励',
    company: {
      name: '宏图国际'
    } as Company
  },
  {
    id: '8',
    name: '移动端开发工程师',
    workPlace: '成都市',
    requirement: '2年以上iOS或Android开发经验，熟悉React Native或Flutter',
    minMonthSalary: '¥17,000',
    maxMonthSalary: '¥23,000',
    salaryDetail: '基本薪资+年终奖，提供免费午餐和健康体检',
    company: {
      name: '星云科技'
    } as Company
  },
  {
    id: '9',
    name: '人力资源经理',
    workPlace: '天津市',
    requirement: '3年以上HR管理经验，熟悉招聘、员工关系管理，良好的沟通能力',
    minMonthSalary: '¥13,000',
    maxMonthSalary: '¥20,000',
    salaryDetail: '薪资根据经验面议，提供员工旅游福利',
    company: {
      name: '云端集团'
    } as Company
  },
  {
    id: '10',
    name: '网络安全工程师',
    workPlace: '重庆市',
    requirement: '3年以上网络安全经验，熟悉防火墙、IDS/IPS、防病毒等技术',
    minMonthSalary: '¥22,000',
    maxMonthSalary: '¥30,000',
    salaryDetail: '基本薪资+技术奖金，五险一金',
    company: {
      name: '云计算公司'
    } as Company
  }
];

const jobs: Job[] = [
  {
    id: "j001",
    name: "人工智能研究员",
    workPlace: "深圳",
    requirement: "硕士及以上学历，3年以上AI领域研究经验。",
    minMonthSalary: "30K",
    maxMonthSalary: "50K",
    salaryDetail: "基本工资+项目奖金+年终奖",
    company: companies[0] // 华为技术有限公司
  },
  {
    id: "j002",
    name: "游戏开发工程师",
    workPlace: "上海",
    requirement: "本科及以上学历，熟悉Unity或Unreal游戏开发引擎。",
    minMonthSalary: "25K",
    maxMonthSalary: "45K",
    salaryDetail: "基本工资+项目奖金+绩效奖金",
    company: companies[1] // 腾讯科技有限公司
  },
  {
    id: "j003",
    name: "数据分析师",
    workPlace: "北京",
    requirement: "本科及以上学历，熟练使用数据分析工具和语言。",
    minMonthSalary: "20K",
    maxMonthSalary: "40K",
    salaryDetail: "基本工资+季度奖金+年终奖",
    company: companies[2] // 字节跳动科技有限公司
  },
  {
    id: "j004",
    name: "电子商务专家",
    workPlace: "杭州",
    requirement: "本科及以上学历，有电子商务平台运营经验。",
    minMonthSalary: "28K",
    maxMonthSalary: "48K",
    salaryDetail: "基本工资+销售提成+年终奖",
    company: companies[3] // 阿里巴巴集团
  }
];
export class JobApi implements MockApiInterface{
  getInjectors(): ApiInjector[] {
    return [
      {
        method: 'GET',
        url: '/job/getTo4Job',
        result: jobs
      },
      {
        method: 'GET',
        url: '/job/getAll',
        result: jobList
      }
    ];
  }
}
