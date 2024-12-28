import {ApiInjector, MockApiInterface} from '@yunzhi/ng-mock-api';
import {Company} from '../entity/company';

export const companyList = [
  {
    id: 1,
    name: 'CC科技有限公司',
    description: '致力于前沿技术研究与创新，专注于人工智能和大数据。',
    address: '北京市海淀区中关村大街88号',
    contactPhone: '010-12345678',
    email: 'contact@abc-tech.com',
    category: '互联网',
    scale: '100-500人',
    introduction: `
         <h1>关于我们</h1>
      <p>
        我们是一家领先的科技公司，专注于为客户提供创新的技术解决方案。
        自成立以来，我们始终秉承着“技术改变世界”的理念，致力于为客户创造价值。
      </p>

      <h2>我们的使命</h2>
      <p>
        在信息化飞速发展的时代，我们的使命是通过创新科技帮助企业提升效率、降低成本、创造更多价值。我们的核心目标是成为行业中的佼佼者，推动技术的不断进步。
      </p>

      <h2>公司愿景</h2>
      <p>
        成为全球技术创新的引领者，为客户和社会创造可持续的价值。我们希望通过科技的力量，将复杂问题简单化，让每一个客户都能感受到科技的便捷和力量。
      </p>

      <h3>1. 行业领先的技术实力</h3>
      <p>
        我们的研发团队由行业顶尖的专家组成，拥有深厚的技术积累和丰富的项目经验。无论是人工智能、区块链，还是云计算、大数据，我们都能提供全面的技术支持。
      </p>

      <h3>2. 客户至上的服务理念</h3>
      <p>
        我们深知客户是公司发展的基石，因此始终以客户需求为导向，为其量身定制解决方案。我们提供7x24小时全天候支持，确保客户的问题能够第一时间得到解决。
      </p>

      <h3>3. 持续的技术创新</h3>
      <p>
        我们每年将营收的20%以上投入到研发中，专注于技术的突破和创新。近年来，我们在智能语音识别、自然语言处理等领域取得了多项专利技术。
      </p>

      <h2>我们的服务</h2>
      <p>
        我们的服务覆盖以下几个核心领域：
      </p>
      <ul>
        <li>
          <strong>人工智能：</strong> 提供机器学习、深度学习的技术支持，开发智能化应用。
        </li>
        <li>
          <strong>区块链技术：</strong> 开发去中心化应用，支持智能合约和企业级区块链解决方案。
        </li>
        <li>
          <strong>云计算服务：</strong> 为企业提供灵活、高效、安全的云服务平台。
        </li>
        <li>
          <strong>大数据分析：</strong> 帮助企业挖掘数据价值，提供智能决策支持。
        </li>
      </ul>

      <h2>我们的核心价值观</h2>
      <ol>
        <li><strong>诚信：</strong> 以诚信为本，建立与客户的长期信任关系。</li>
        <li><strong>创新：</strong> 持续技术创新，助力客户成功。</li>
        <li><strong>协作：</strong> 团队协作，共同成长。</li>
        <li><strong>责任：</strong> 对客户、员工和社会负责，践行企业社会责任。</li>
      </ol>

      <h2>联系我们</h2>
      <p>
        如果您对我们的服务感兴趣，欢迎随时联系我们。我们期待与您合作，共同推动技术进步。
      </p>
      <p>
        <strong>地址：</strong> 北京市中关村科技园区<br>
        <strong>电话：</strong> +86-10-12345678<br>
        <strong>邮箱：</strong> info@ourcompany.com
      </p>

      <h2>加入我们</h2>
      <p>
        我们正在寻找有志于技术创新的人才。如果您对科技充满热情，并希望成为行业的一员，请发送您的简历至 <a href="mailto:hr@ourcompany.com">hr@ourcompany.com</a>。
      </p>
    `,
  },
  {
    id: 2,
    name: 'XYZ互联网公司',
    description: '为全球用户提供高质量的互联网服务，涵盖搜索、社交、广告等领域。',
    address: '上海市浦东新区陆家嘴金融街100号',
    contactPhone: '021-23456789',
    email: 'info@xyz-tech.com',
    category: '信息技术',
    scale: '500-1000人',
    introduction: 'XYZ互联网公司致力于通过技术推动互联网行业的发展，已成为业内领先的公司之一。',
  },
  {
    id: 3,
    name: 'DEF数据科技',
    description: '专注于数据分析与人工智能，为企业提供智能决策支持。',
    address: '深圳市南山区科技园路33号',
    contactPhone: '0755-34567890',
    email: 'service@defdata.com',
    category: '数据科技',
    scale: '50-100人',
    introduction: '我们专注于为各类企业提供专业的数据分析与人工智能解决方案，助力企业提升决策效率。',
  },
  {
    id: 4,
    name: 'GHI移动科技',
    description: '提供移动应用开发及解决方案，致力于为用户提供极致的移动体验。',
    address: '广州市天河路100号',
    contactPhone: '020-45678901',
    email: 'contact@ghimobile.com',
    category: '移动科技',
    scale: '200-500人',
    introduction: 'GHI移动科技专注于为企业和个人提供移动端技术创新，提升用户体验。',
  },
  {
    id: 5,
    name: 'JKL电商公司',
    description: '专注于电子商务，拥有自主开发的电商平台，为用户提供一站式购物体验。',
    address: '南京市鼓楼区中央路45号',
    contactPhone: '025-56789012',
    email: 'support@jkl-ecommerce.com',
    category: '电商',
    scale: '500-1000人',
    introduction: '我们致力于打造最便捷的在线购物平台，凭借创新的技术和服务赢得市场份额。',
  },
  {
    id: 6,
    name: 'MNO创新科技',
    description: '创新驱动，为全球客户提供高效的云计算解决方案和人工智能产品。',
    address: '成都市高新区科技路12号',
    contactPhone: '028-67890123',
    email: 'info@mno-tech.com',
    category: '云计算',
    scale: '100-300人',
    introduction: 'MNO创新科技专注于云计算和人工智能领域，助力企业实现智能化转型。',
  },
  {
    id: 7,
    name: 'PQR健康科技',
    description: '健康科技创新企业，致力于通过智能设备为用户提供健康管理服务。',
    address: '北京市朝阳区建国路78号',
    contactPhone: '010-98765432',
    email: 'contact@pqr-health.com',
    category: '健康科技',
    scale: '50-150人',
    introduction: '我们提供智能健康管理服务，帮助用户实现全面健康监控和个性化管理。',
  },
  {
    id: 8,
    name: 'STU金融科技',
    description: '提供金融服务创新，致力于通过技术提升金融服务效率。',
    address: '上海市黄浦区南京东路100号',
    contactPhone: '021-87654321',
    email: 'info@stu-fintech.com',
    category: '金融科技',
    scale: '300-700人',
    introduction: 'STU金融科技致力于为银行、保险等金融机构提供高效的技术解决方案。',
  },
  {
    id: 9,
    name: 'VWX物流科技',
    description: '智能物流系统开发商，提供全球物流和供应链解决方案。',
    address: '重庆市渝中区解放碑25号',
    contactPhone: '023-11223344',
    email: 'contact@vwx-logistics.com',
    category: '物流科技',
    scale: '100-300人',
    introduction: '我们提供高效的物流管理解决方案，帮助企业提升供应链效率和运营效益。',
  },
  {
    id: 10,
    name: 'YZA文化传媒',
    description: '文化传媒公司，致力于跨媒体传播与内容创作。',
    address: '杭州市西湖区湖滨路15号',
    contactPhone: '0571-22334455',
    email: 'info@yza-media.com',
    category: '传媒',
    scale: '50-100人',
    introduction: '我们提供专业的文化传媒服务，涵盖广告、视频制作和内容创作等领域。',
  },
] as Company[]

export const companies = [
  {
    "id": 1,
    "name": "华为技术有限公司",
    "description": "全球领先的信息与通信技术(ICT)解决方案提供商。",
    "address": "中国广东省深圳市龙岗区坂田华为基地",
    "contactPhone": "0755-28780808",
    "email": "contact@huawei.com",
    "category": "科技"
  },
  {
    "id": 2,
    "name": "腾讯科技有限公司",
    "description": "提供社交、支付、娱乐等多元化的互联网服务。",
    "address": "中国广东省深圳市南山区科技园腾讯大厦",
    "contactPhone": "0755-86013388",
    "email": "info@tencent.com",
    "category": "科技"
  },
  {
    "id": 3,
    "name": "字节跳动科技有限公司",
    "description": "全球领先的内容平台，旗下拥有今日头条、抖音等产品。",
    "address": "中国北京市海淀区知春路65号中国卫星通信大厦",
    "contactPhone": "010-12345678",
    "email": "contact@bytedance.com",
    "category": "科技"
  },
  {
    "id": 4,
    "name": "阿里巴巴集团",
    "description": "全球最大的电子商务公司，提供广泛的商业和金融产品及服务。",
    "address": "中国浙江省杭州市滨江区网商路699号阿里巴巴园区",
    "contactPhone": "0571-85027110",
    "email": "info@alibabagroup.com",
    "category": "科技"
  }
] as Company[];

export class CompanyApi implements MockApiInterface {
  getInjectors(): ApiInjector[] {
    return [
      {
        url: '/company/getTo4Company',
        method: 'GET',
        result: companies
      },
      {
        url: '/company/getAll',
        method: 'GET',
        result: companyList
      },
      {
        url: '/company/:id',
        method: 'GET',
        result: companyList[0]
      }
    ];
  }
}
