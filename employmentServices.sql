/*
 Navicat Premium Dump SQL

 Source Server         : 08
 Source Server Type    : MySQL
 Source Server Version : 80035 (8.0.35)
 Source Host           : localhost:3308
 Source Schema         : employmentServices

 Target Server Type    : MySQL
 Target Server Version : 80035 (8.0.35)
 File Encoding         : 65001

 Date: 30/12/2024 07:21:45
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `delete_at` bigint NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `content` text COLLATE utf8mb4_general_ci,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `hits` bigint DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of article
-- ----------------------------
BEGIN;
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (1, '2024-12-29 12:10:36.698000', 0, b'0', '2024-12-29 17:54:19.511652', '<h2>人工智能的现状与未来</h2>\n<p>人工智能（AI）是当前科技领域最热门的话题之一。</p>\n<h3>什么是人工智能？</h3>\n<p>AI 是通过算法和数据训练出的系统，它能够模仿人类的思维过程，如学习和推理。典型的 AI 技术包括：</p>\n<ul>\n<li>机器学习（Machine Learning）：通过数据训练模型。</li>\n<li>自然语言处理（NLP）：用于处理人类语言的技术。</li>\n</ul>\n<h3>AI 的主要应用</h3>\n<ol>\n<li>医疗健康：辅助诊断、药物研发。</li>\n<li>自动驾驶：如特斯拉的 Autopilot。</li>\n</ol>', '人工智能是一种通过算法和数据训练出的系统，它能够模仿人类的思维过程。', 12, '理解人工智能');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (2, '2024-12-29 17:55:52.537000', 0, b'0', '2024-12-29 17:55:55.796357', '<h2>就业指导的基础知识</h2>\n<p>就业指导是现代教育和职业发展的重要组成部分，帮助求职者了解如何在激烈的就业市场中脱颖而出。</p>\n<h3>自我评估与职业规划</h3>\n<p>成功的职业生涯始于清晰的自我评估和职业规划。了解自己的兴趣、优势和价值观，可以帮助你选择适合自己的职业方向。</p>\n<h3>提升职业技能</h3>\n<p>无论你从事哪个行业，提升自己的职业技能都至关重要。如今，技术和行业的发展日新月异，持续学习并提升技能可以增强自己的竞争力。</p>\n<h3>简历与求职信</h3>\n<p>一份清晰、精简且具有吸引力的简历是求职成功的关键。简历应突出个人成就、经验和技能，而求职信则能进一步表达你对职位的兴趣和为什么你是合适的候选人。</p>\n<h3>面试技巧</h3>\n<p>面试是求职过程中最重要的一环。准备充分的面试技巧可以让你在面试官面前展现出自信和专业。要研究公司背景、职位要求，并准备好回答常见问题。</p>\n<h3>网络与职业发展</h3>\n<p>在职场中，建立一个强大的职业网络至关重要。通过参加行业活动、加入职业组织或通过社交媒体与同行建立联系，可以为自己提供更多的就业机会。</p>\n<h3>进入职场的心态与适应</h3>\n<p>进入职场后的适应能力也是成功的关键。保持积极心态，愿意接受挑战，并快速适应新的工作环境，会让你在职业道路上越走越远。</p>\n<h3>总结</h3>\n<p>就业指导不仅仅是找到一份工作，更是关于如何规划职业生涯、提升个人价值和应对职场挑战。通过不断学习和调整，你将能够在职场中获得成功。</p>', '就业指导是帮助学生和求职者了解职业发展道路、提升职业技能和制定求职策略的过程。本文将介绍一些成功进入职场的关键步骤。', 1, '就业指导：如何成功进入职场');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (3, '2024-12-29 17:56:33.975000', 0, b'0', '2024-12-29 18:25:00.784438', '<h2>提升个人竞争力的五个方法</h2>\n<p>在职场中，个人竞争力决定了你是否能够脱颖而出并获得理想的职位。以下是五个提升个人竞争力的实用方法：</p>\n<h3>1. 学习新技能</h3>\n<p>随着技术的不断发展，新的技能和知识不断涌现。学习与行业相关的技术技能，尤其是编程、数据分析等热门领域的技能，将帮助你在职场中获得更多机会。</p>\n<h3>2. 提升软技能</h3>\n<p>除了专业技能，软技能（如沟通、团队合作、领导力等）在职场中同样重要。通过参加培训、参与团队项目等方式提升自己的软技能，可以增加自己在面试中的竞争力。</p>\n<h3>3. 参与行业活动</h3>\n<p>参加行业会议、讲座和研讨会等活动，不仅能够学习到最新的行业动态，还能扩大自己的人脉网络，为将来的职业发展打下基础。</p>\n<h3>4. 培养解决问题的能力</h3>\n<p>在职场中，解决问题的能力非常重要。通过主动承担复杂任务、不断挑战自我，提升自己的问题解决能力，将使你在职场中更具价值。</p>\n<h3>5. 建立个人品牌</h3>\n<p>通过社交媒体、博客等平台建立个人品牌，可以让更多的雇主和同行了解你的专业能力和独特价值。这不仅能增加就业机会，还能帮助你获得职业上的认可。</p>\n<h3>总结</h3>\n<p>提升个人竞争力是一个持续的过程，通过不断学习和提升自己，你将能够在激烈的职场竞争中占据一席之地。</p>', '在竞争激烈的就业市场中，如何提升自己的竞争力是每个求职者都需要思考的问题。本文将介绍五个有效的提升个人竞争力的方法。', 2, '提升个人竞争力的五个方法');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (4, '2024-12-29 17:57:01.308000', 0, b'0', '2024-12-29 17:57:01.312057', '<h2>面试技巧：如何在面试中脱颖而出</h2>\n<p>面试是求职过程中至关重要的一步，它不仅考察你的专业能力，还考察你的沟通技巧、心理素质和应变能力。掌握一些实用的面试技巧，将帮助你在面试中脱颖而出。</p>\n<h3>1. 做好充分的准备</h3>\n<p>在面试前，做好充分的准备是成功的关键。了解公司的背景、文化以及职位要求，掌握面试官可能会问到的问题。通过这些准备，能让你在面试时显得更加自信和专业。</p>\n<h3>2. 练习常见的面试问题</h3>\n<p>面试中常见的一些问题包括：&ldquo;自我介绍&rdquo;、&ldquo;为什么选择我们公司&rdquo;、&ldquo;你的优点和缺点是什么&rdquo;等。通过模拟面试，提前准备好这些问题的答案，可以帮助你在真正的面试中更加流畅地回答。</p>\n<h3>3. 注重第一印象</h3>\n<p>面试时的第一印象非常重要。穿着得体、精神饱满，注意仪态和眼神交流，能给面试官留下积极的印象。此外，入场时要准时，体现你的时间观念和职业素养。</p>\n<h3>4. 展现自信但不傲慢</h3>\n<p>面试官希望看到你有信心，但同时也希望你表现得谦虚有礼。在面试中，要展示自己的优势和能力，但不要过于自夸或显得过于傲慢。自信而谦逊的态度更容易获得面试官的好感。</p>\n<h3>5. 用具体例子说明你的能力</h3>\n<p>当面试官询问你的能力或经验时，尽量用具体的例子来说明。例如，当被问到&ldquo;你如何解决工作中的挑战&rdquo;时，可以讲述自己在上一份工作中面对挑战并成功解决的实际案例。这种方式能更有说服力。</p>\n<h3>6. 询问问题</h3>\n<p>面试的最后阶段，面试官通常会问你是否有问题。这是一个展示你对公司和职位感兴趣的机会。可以询问关于公司文化、团队合作、晋升机会等方面的问题，显示你对该职位的重视和思考。</p>\n<h3>7. 保持积极心态</h3>\n<p>面试过程中，难免会遇到一些难题或压力。保持积极的心态，不要因为一个问题的回答不够完美而失去信心。面试官更看重的是你的整体表现和应变能力。</p>\n<h3>总结</h3>\n<p>面试不仅是展示自己能力的机会，也是一个了解公司文化、确认职业匹配度的过程。通过充分准备、展现自信与专业，以及与面试官建立良好的互动，你将大大增加获得理想工作的机会。</p>', '面试是求职过程中最关键的一步，如何在面试中脱颖而出是每个求职者必须掌握的技巧。本文将分享一些实用的面试技巧，帮助你顺利通过面试，获得理想的工作机会。', 0, '面试技巧：如何在面试中脱颖而出');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (5, '2024-12-29 17:57:32.535000', 0, b'0', '2024-12-29 17:57:34.228412', '<h2>数字证书：理解和应用</h2>\n<p>随着网络安全问题日益严峻，数字证书作为一种重要的安全工具，已经在现代互联网通信中发挥了至关重要的作用。本文将为您介绍数字证书的基本概念、工作原理及其应用场景。</p>\n<h3>1. 什么是数字证书？</h3>\n<p>数字证书是一种电子文档，用于验证信息传输双方的身份，保证数据的安全性和完整性。数字证书由证书颁发机构（CA）签发，包含了公钥、持有者的身份信息以及数字签名等内容。</p>\n<h3>2. 数字证书的工作原理</h3>\n<p>数字证书利用公钥加密技术来实现安全通信。在数字证书的应用中，公钥和私钥是一对密钥，其中公钥公开，私钥保密。数字证书的使用通常涉及以下几个步骤：</p>\n<ul>\n<li><strong>证书颁发</strong>：用户向受信任的证书颁发机构（CA）申请数字证书，CA对用户信息进行验证后签发证书。</li>\n<li><strong>证书验证</strong>：在通信过程中，接收方通过验证数字证书来确认发送方的身份，确保信息的来源是可靠的。</li>\n<li><strong>数据加密与解密</strong>：发送方使用接收方的公钥加密数据，接收方通过自己的私钥解密数据，确保数据传输的安全性。</li>\n</ul>\n<h3>3. 数字证书的组成部分</h3>\n<p>数字证书通常包含以下几个重要组成部分：</p>\n<ul>\n<li><strong>证书持有者信息：</strong>包括持有者的姓名、组织、域名等信息。</li>\n<li><strong>公钥：</strong>用于加密信息的公钥。</li>\n<li><strong>证书颁发机构的数字签名：</strong>由CA对证书进行签名，确保证书的有效性和真实性。</li>\n<li><strong>有效期：</strong>证书的有效期，从签发日期到到期日期。</li>\n<li><strong>序列号：</strong>唯一标识该证书的编号。</li>\n<li><strong>证书颁发机构（CA）信息：</strong>包括CA的名称和信息。</li>\n</ul>\n<h3>4. 数字证书的应用场景</h3>\n<p>数字证书广泛应用于以下几种场景：</p>\n<ul>\n<li><strong>SSL/TLS协议</strong>：在网页浏览时，数字证书用于建立安全的HTTPS连接，保护用户和网站之间的通信安全。</li>\n<li><strong>电子邮件加密</strong>：通过数字证书加密电子邮件内容，确保邮件在传输过程中的隐私性。</li>\n<li><strong>身份认证</strong>：数字证书可以作为一种电子身份认证方式，用于对用户身份进行验证，如在网上银行或企业系统中登录时。</li>\n<li><strong>代码签名</strong>：开发者使用数字证书对软件进行签名，确保软件在发布过程中没有被篡改，增强用户对软件的信任。</li>\n</ul>\n<h3>5. 数字证书的管理</h3>\n<p>数字证书的管理涉及以下几个方面：</p>\n<ul>\n<li><strong>证书申请：</strong>用户需要向证书颁发机构（CA）申请数字证书，并提供相应的身份验证资料。</li>\n<li><strong>证书安装：</strong>证书申请成功后，需要将证书安装到相应的服务器或客户端，确保其能够正常使用。</li>\n<li><strong>证书更新：</strong>数字证书有有效期，到期后需要更新或更换，以保证其继续有效。</li>\n<li><strong>证书撤销：</strong>如果证书被盗用或存在其他问题，需要向CA申请撤销证书。</li>\n</ul>\n<h3>6. 常见的数字证书类型</h3>\n<p>数字证书根据使用场景的不同，可以分为不同的类型：</p>\n<ul>\n<li><strong>SSL/TLS证书：</strong>用于加密网站和客户端之间的通信。</li>\n<li><strong>个人证书：</strong>用于身份验证和加密电子邮件。</li>\n<li><strong>代码签名证书：</strong>用于确保软件代码的完整性和可信度。</li>\n<li><strong>企业证书：</strong>用于企业内部员工的身份验证和访问控制。</li>\n</ul>\n<h3>总结</h3>\n<p>数字证书在现代互联网通信中起着至关重要的作用，通过确保身份验证和数据加密，保障了网络安全。随着信息技术的不断发展，数字证书的应用场景和重要性也越来越广泛。了解数字证书的工作原理及其管理方法，对于每个关注网络安全的人来说，都是必不可少的知识。</p>', '数字证书是保障互联网安全通信的重要工具。本文将深入讲解数字证书的原理、应用场景以及如何在网络安全中发挥重要作用。\n', 1, '数字证书：理解和应用');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (6, '2024-12-29 17:58:41.205000', 0, b'0', '2024-12-29 18:20:48.256191', '<h2>高效面试技巧：让面试官记住你</h2>\n<p>面试是每个求职者展示自我、了解公司文化和职位要求的关键环节。如何在面试中脱颖而出，不仅要通过专业技能的展示，还要通过个人魅力和应对技巧来打动面试官。</p>\n<h3>1. 做好个人品牌塑造</h3>\n<p>面试官往往会在短短的时间内对你做出评判，因此如何在简短的时间内展示自己是关键。在面试过程中，尝试展示个人品牌，即你的独特性格、能力和职业价值观。让面试官感受到你的热情和独特的工作风格。</p>\n<h3>2. 掌握&ldquo;STAR&rdquo;面试法</h3>\n<p>面试中，面试官可能会问到&ldquo;你过去如何处理某个挑战&rdquo;这样的问题。在这种情况下，可以使用&ldquo;STAR&rdquo;面试法进行回答：</p>\n<ul>\n<li><strong>S（Situation）：</strong>描述当时的情境。</li>\n<li><strong>T（Task）：</strong>说明你的任务是什么。</li>\n<li><strong>A（Action）：</strong>讲述你采取了哪些行动。</li>\n<li><strong>R（Result）：</strong>描述你采取的行动产生的结果。</li>\n</ul>\n<p>通过这种方法，你可以用具体的例子来展示自己的能力和思维方式。</p>\n<h3>3. 展现问题解决能力</h3>\n<p>面试官通常希望看到你不仅具备执行任务的能力，还能在复杂和困难的情况下解决问题。举一些你过去如何识别问题、分析原因并找到解决方案的例子。这会让面试官看到你的思维能力和行动力。</p>\n<h3>4. 保持积极的肢体语言</h3>\n<p>肢体语言在面试中的作用不可忽视。微笑、点头、目光接触等积极的肢体语言能够传递出你自信和友好的信号，增加与面试官的亲和力。避免交叉双臂和低头等消极的肢体表现。</p>\n<h3>5. 与面试官建立良好的互动</h3>\n<p>面试不仅是你回答问题的过程，也是一个双向交流的机会。通过提问和倾听，展示你对公司和职位的兴趣，并通过互动建立和面试官之间的良好关系。例如，你可以询问公司文化、团队合作、未来发展等方面的问题。</p>\n<h3>6. 善用面试中的停顿</h3>\n<p>当面试官提出问题时，不要急于马上回答。适当的停顿可以帮助你整理思路，更好地组织语言。快速回答可能会导致思维混乱，影响回答质量。</p>\n<h3>7. 展现对岗位的热情</h3>\n<p>对岗位的热情是面试中一个非常重要的加分项。面试官希望看到你对所应聘职位的真正兴趣和热情。可以在面试中讲述自己为何选择该岗位、自己的职业目标，以及为何你认为自己适合这个岗位。</p>\n<h3>8. 自信而不自负</h3>\n<p>自信是面试中的关键，但过于自负可能让面试官觉得你不够谦虚。在谈论自己的成就时，尽量表现得谦逊并将成功归功于团队合作，避免给人留下高傲的印象。</p>\n<h3>9. 如何回答&ldquo;为什么要离开上一份工作&rdquo;</h3>\n<p>当被问到离开上一份工作的原因时，尽量避免负面言辞。可以侧重于职业发展的需求、个人成长的机会，或者对新职位的兴趣等。避免批评前雇主或同事，这样会给面试官留下不好的印象。</p>\n<h3>10. 最后的总结：展示个人价值</h3>\n<p>在面试的最后，你有机会总结自己为什么是这个岗位的最佳人选。结合面试过程中谈到的内容，简洁明了地重申你的优势，并表达你对加入公司的热情和信心。</p>\n<h3>总结</h3>\n<p>面试不仅是展示能力的舞台，也是你与未来雇主建立联系的机会。通过高效的沟通、积极的态度和清晰的职业目标，你能够在众多求职者中脱颖而出。做好准备、保持自信，祝你在面试中取得成功，顺利拿到理想的工作！</p>\n<p>&nbsp;</p>\n<pre class=\"language-java\"><code>@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http\n            .authorizeRequests()\n                .antMatchers(\"/public/**\").permitAll() // 公开访问的路径\n                .antMatchers(\"/admin/**\").hasRole(\"ADMIN\") // 仅管理员可访问\n                .anyRequest().authenticated() // 其他请求需认证\n            .and()\n            .formLogin() // 启用表单登录\n                .loginPage(\"/login\") // 自定义登录页面\n                .permitAll()\n            .and()\n            .logout() // 启用注销功能\n                .permitAll();\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder(); // 使用 BCrypt 进行密码加密\n    }\n}</code></pre>', '面试不仅是展示自己能力的机会，还是与面试官建立联系的过程。本文将提供更多的面试技巧，帮助你在面试中表现得更好，让面试官记住你。\n', 2, ' 高效面试技巧：让面试官记住你');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (7, '2024-12-29 18:03:09.877000', 0, b'0', '2024-12-29 18:15:03.103937', '<h2>Spring Security：打造安全的 Web 应用程序</h2>\n<p>在现代 Web 开发中，安全性是一个不可忽视的重要方面。<strong>Spring Security</strong> 是 Spring 框架的安全模块，它能够帮助开发者快速实现身份验证、授权和保护应用程序免受常见的安全威胁。</p>\n<h3>1. 什么是 Spring Security？</h3>\n<p>Spring Security 是 Spring 框架的一个子项目，它提供了全面的安全解决方案，包括：</p>\n<ul>\n<li>身份验证（Authentication）</li>\n<li>授权（Authorization）</li>\n<li>防止跨站请求伪造（CSRF）攻击</li>\n<li>保护 HTTP 请求</li>\n<li>集成 OAuth2 和 JWT 等现代安全标准</li>\n</ul>\n<h3>2. Spring Security 的核心概念</h3>\n<ul>\n<li><strong>Authentication（身份验证）：</strong>验证用户身份是否合法，例如登录用户名和密码。</li>\n<li><strong>Authorization（授权）：</strong>确定用户是否有权限访问特定资源。</li>\n<li><strong>SecurityContext：</strong>存储当前用户的安全信息，例如认证信息和权限。</li>\n<li><strong>Filter Chain（过滤器链）：</strong>Spring Security 使用一系列过滤器来处理安全相关的请求。</li>\n</ul>\n<h3>3. 快速入门：Spring Security 的基本配置</h3>\n<p>以下是一个简单的 Spring Security 配置示例，展示如何保护 Web 应用程序的部分资源。</p>\n<pre class=\"language-java\"><code>@Configuration\n@EnableWebSecurity\npublic class SecurityConfig extends WebSecurityConfigurerAdapter {\n\n    @Override\n    protected void configure(HttpSecurity http) throws Exception {\n        http\n            .authorizeRequests()\n                .antMatchers(\"/public/**\").permitAll() // 公开访问的路径\n                .antMatchers(\"/admin/**\").hasRole(\"ADMIN\") // 仅管理员可访问\n                .anyRequest().authenticated() // 其他请求需认证\n            .and()\n            .formLogin() // 启用表单登录\n                .loginPage(\"/login\") // 自定义登录页面\n                .permitAll()\n            .and()\n            .logout() // 启用注销功能\n                .permitAll();\n    }\n\n    @Bean\n    public PasswordEncoder passwordEncoder() {\n        return new BCryptPasswordEncoder(); // 使用 BCrypt 进行密码加密\n    }\n}</code></pre>', 'Spring Security 是 Spring 框架的核心模块之一，为 Web 应用程序提供了强大的身份验证和授权功能。', 18, '探索 Spring Security：打造安全的 Web 应用程序');
INSERT INTO `article` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `content`, `description`, `hits`, `title`) VALUES (8, '2024-12-29 18:18:01.051000', 0, b'0', '2024-12-29 18:20:42.609349', '<h2>刷题的重要性</h2>\n<p>在技术学习和求职过程中，刷题能够帮助你熟悉算法、数据结构，并提高编程逻辑。</p>\n<h3>选择合适的平台</h3>\n<p>高质量的刷题平台可以帮助你系统地练习，推荐以下平台：</p>\n<ul>\n<li><strong>LeetCode</strong>：专注于算法和数据结构，是技术面试准备的首选。</li>\n<li><strong>HackerRank</strong>：覆盖广泛，包括算法、数据库、数学等多个领域。</li>\n<li><strong>Codewars</strong>：通过闯关游戏的形式练习编程技巧。</li>\n</ul>\n<h3>刷题的方法与技巧</h3>\n<p>掌握科学的刷题方法，提升效率：</p>\n<ul>\n<li><strong>分类练习：</strong>根据主题（如数组、动态规划、树）进行集中练习，深入理解每种算法。</li>\n<li><strong>逐步提高：</strong>从简单题目开始，逐渐挑战中等和困难题目。</li>\n<li><strong>记录错题：</strong>将错误的题目整理成错题集，定期复习巩固。</li>\n<li><strong>理解解法：</strong>不要盲目刷题，注重理解每道题的思路和优化方法。</li>\n</ul>\n<h3>坚持和总结</h3>\n<p>刷题是一个长期积累的过程，坚持每天练习，同时总结解题规律，才能真正提升编程能力。</p>', '刷题是提升编程能力和应对技术面试的重要手段，通过高效的练习方法，快速掌握算法和解决问题的能力。', 4, '刷题技巧');
COMMIT;

-- ----------------------------
-- Table structure for attachment
-- ----------------------------
DROP TABLE IF EXISTS `attachment`;
CREATE TABLE `attachment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `delete_at` bigint NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `ext` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `file_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK2calnf033my9dcy39wuhr61fr` (`file_id`),
  CONSTRAINT `FK2calnf033my9dcy39wuhr61fr` FOREIGN KEY (`file_id`) REFERENCES `my_file` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of attachment
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `delete_at` bigint NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `address` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `category` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `contact_phone` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `introduction` text COLLATE utf8mb4_general_ci,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `scale` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of company
-- ----------------------------
BEGIN;
INSERT INTO `company` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `address`, `category`, `contact_phone`, `description`, `email`, `introduction`, `name`, `scale`) VALUES (1, '2024-12-29 13:24:43.022000', 0, b'0', '2024-12-29 13:24:43.039478', '中国浙江省杭州市滨江区网商路699号阿里巴巴园区', '科技', '0571-85027110', '全球最大的电子商务公司，提供广泛的商业和金融产品及服务。', 'info@alibabagroup.com', '<h1>关于我们</h1>\n<p>我们是一家领先的科技公司，专注于为客户提供创新的技术解决方案。 自成立以来，我们始终秉承着&ldquo;技术改变世界&rdquo;的理念，致力于为客户创造价值。</p>\n<h2>我们的使命</h2>\n<p>在信息化飞速发展的时代，我们的使命是通过创新科技帮助企业提升效率、降低成本、创造更多价值。我们的核心目标是成为行业中的佼佼者，推动技术的不断进步。</p>\n<h2>公司愿景</h2>\n<p>成为全球技术创新的引领者，为客户和社会创造可持续的价值。我们希望通过科技的力量，将复杂问题简单化，让每一个客户都能感受到科技的便捷和力量。</p>\n<h3>1. 行业领先的技术实力</h3>\n<p>我们的研发团队由行业顶尖的专家组成，拥有深厚的技术积累和丰富的项目经验。无论是人工智能、区块链，还是云计算、大数据，我们都能提供全面的技术支持。</p>\n<h3>2. 客户至上的服务理念</h3>\n<p>我们深知客户是公司发展的基石，因此始终以客户需求为导向，为其量身定制解决方案。我们提供7x24小时全天候支持，确保客户的问题能够第一时间得到解决。</p>\n<h3>3. 持续的技术创新</h3>\n<p>我们每年将营收的20%以上投入到研发中，专注于技术的突破和创新。近年来，我们在智能语音识别、自然语言处理等领域取得了多项专利技术。</p>\n<h2>我们的服务</h2>\n<p>我们的服务覆盖以下几个核心领域：</p>\n<ul>\n<li><strong>人工智能：</strong> 提供机器学习、深度学习的技术支持，开发智能化应用。</li>\n<li><strong>区块链技术：</strong> 开发去中心化应用，支持智能合约和企业级区块链解决方案。</li>\n<li><strong>云计算服务：</strong> 为企业提供灵活、高效、安全的云服务平台。</li>\n<li><strong>大数据分析：</strong> 帮助企业挖掘数据价值，提供智能决策支持。</li>\n</ul>\n<h2>我们的核心价值观</h2>\n<ol>\n<li><strong>诚信：</strong> 以诚信为本，建立与客户的长期信任关系。</li>\n<li><strong>创新：</strong> 持续技术创新，助力客户成功。</li>\n<li><strong>协作：</strong> 团队协作，共同成长。</li>\n<li><strong>责任：</strong> 对客户、员工和社会负责，践行企业社会责任。</li>\n</ol>\n<h2>联系我们</h2>\n<p>如果您对我们的服务感兴趣，欢迎随时联系我们。我们期待与您合作，共同推动技术进步。</p>', '阿里巴巴集团', '5000-10000');
INSERT INTO `company` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `address`, `category`, `contact_phone`, `description`, `email`, `introduction`, `name`, `scale`) VALUES (2, '2024-12-29 14:37:39.198000', 0, b'0', '2024-12-29 14:41:47.982877', '中国北京市海淀区知春路65号中国卫星通信大厦', '', '010-12345678', '全球领先的内容平台，旗下拥有今日头条、抖音等产品。', 'contact@bytedance.com', '<p><strong>字节跳动科技有限公司</strong>（ByteDance）是一家全球领先的人工智能公司，成立于2012年，总部位于中国北京。字节跳动致力于通过技术创新推动内容创作与分发的变革，旗下拥有一系列受欢迎的应用程序和平台，其中以短视频平台 <strong>抖音</strong>（Douyin）和国际版 <strong>TikTok</strong> 最为知名。</p>\n<p>以下是字节跳动的核心产品与服务</p>\n<ol>\n<li>&nbsp; &nbsp; <strong>抖音（Douyin）：</strong> &nbsp; &nbsp;\n<p>抖音是中国最受欢迎的短视频平台之一，用户可以通过该平台创作、分享和发现各种有趣的短视频内容。凭借其先进的推荐算法，抖音不仅提供个性化的内容推荐，还支持直播、购物和社交互动。</p>\n</li>\n<li>&nbsp; &nbsp; <strong>TikTok：</strong> &nbsp; &nbsp;\n<p>TikTok是字节跳动推出的国际版本应用，已在全球范围内广受欢迎。凭借其创意性和娱乐性，TikTok在年轻人中拥有极高的用户活跃度，成为全球社交媒体平台的佼佼者。</p>\n</li>\n<li>&nbsp; &nbsp; <strong>今日头条（Toutiao）：</strong> &nbsp; &nbsp;\n<p>今日头条是字节跳动的一款新闻聚合平台，利用人工智能算法为用户推荐个性化的新闻内容，覆盖时事热点、娱乐新闻等多领域资讯。</p>\n</li>\n<li>&nbsp; &nbsp; <strong>Lark（飞书）：</strong> &nbsp; &nbsp;\n<p>Lark是综合性的团队协作工具，集消息、日历、文档、云存储等功能于一体，提升企业的办公效率和团队协作能力。</p>\n</li>\n</ol>\n<p>字节跳动以&ldquo;激发创造力，丰富人类生活&rdquo;为使命，不断推动技术创新和全球化发展。公司致力于通过人工智能技术，赋能内容创作者，为全球用户提供更优质的数字内容服务。</p>', '字节跳动科技有限公司', '科技');
COMMIT;

-- ----------------------------
-- Table structure for job
-- ----------------------------
DROP TABLE IF EXISTS `job`;
CREATE TABLE `job` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `delete_at` bigint NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `description` text COLLATE utf8mb4_general_ci,
  `max_month_salary` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `min_month_salary` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `requirement` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `salary_detail` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `work_place` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `company_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK5q04favsasq8y70bsei7wv8fc` (`company_id`),
  CONSTRAINT `FK5q04favsasq8y70bsei7wv8fc` FOREIGN KEY (`company_id`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of job
-- ----------------------------
BEGIN;
INSERT INTO `job` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `description`, `max_month_salary`, `min_month_salary`, `name`, `requirement`, `salary_detail`, `work_place`, `company_id`) VALUES (1, '2024-12-29 14:16:02.729000', 0, b'0', '2024-12-29 14:42:01.520266', '<h3>职位描述：</h3>\n<ul>\n<li>负责公司前端技术开发与维护，参与产品需求评审与技术评估。</li>\n<li>使用主流前端框架（React 或 Vue）开发高质量的用户界面。</li>\n<li>与后端工程师紧密合作，完成接口联调并优化交互体验。</li>\n<li>研究前沿技术，并能将适合的技术应用于实际项目中。</li>\n</ul>\n<h3>任职要求：</h3>\n<ul>\n<li>三年以上前端开发经验，能独立承担前端模块的开发与维护。</li>\n<li>熟悉 HTML、CSS、JavaScript，具备扎实的前端开发基础。</li>\n<li>熟练掌握 React 或 Vue 框架，有大型项目经验优先。</li>\n<li>了解前端构建工具（如 Webpack、Vite 等），能优化前端性能。</li>\n<li>具备良好的沟通能力和团队合作精神。</li>\n</ul>\n<h3>薪资福利：</h3>\n<p>薪资范围 &yen;15,000 - &yen;22,000，具体视个人能力与经验而定。享受绩效奖金、年终奖，以及完善的五险一金。</p>\n<p>此外，公司提供丰富的员工活动和培训机会，帮助员工不断成长。</p>', '22000', '15000', '前端开发工程师', '3年以上前端开发经验，熟悉React/Vue，掌握HTML、CSS、JavaScript', '根据个人能力及经验调整薪资，享受年终奖', '北京市', 2);
COMMIT;

-- ----------------------------
-- Table structure for my_file
-- ----------------------------
DROP TABLE IF EXISTS `my_file`;
CREATE TABLE `my_file` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `delete_at` bigint NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `md5` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mime` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `path` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `quote_number` int NOT NULL,
  `sha1` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `thumbnail_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK_f8qnkdt1u5uvdj53kixj802h9` (`thumbnail_id`),
  CONSTRAINT `FK9uckmq1yt7pnpfusq5ykto9by` FOREIGN KEY (`thumbnail_id`) REFERENCES `my_file` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of my_file
-- ----------------------------
BEGIN;
COMMIT;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `create_time` datetime(6) DEFAULT NULL,
  `delete_at` bigint NOT NULL,
  `deleted` bit(1) DEFAULT NULL,
  `update_time` datetime(6) DEFAULT NULL,
  `name` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `password` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `username` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UK5bd9yqnpf0w0teyr7iw28u388` (`username`,`delete_at`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- ----------------------------
-- Records of user
-- ----------------------------
BEGIN;
INSERT INTO `user` (`id`, `create_time`, `delete_at`, `deleted`, `update_time`, `name`, `password`, `role`, `username`) VALUES (1, '2024-12-29 16:31:04.592000', 0, b'0', '2024-12-29 16:31:04.684464', NULL, '$2a$10$oc0ZKlUCsOQpsuW5slqSyevbsEbxdU5lvFWZjq3GU30J6GMdJEj92', 'ROLE_ADMIN', '13920618851');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
