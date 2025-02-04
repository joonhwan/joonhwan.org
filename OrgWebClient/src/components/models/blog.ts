export interface Blog {
    title: string;
    topic: string;
    tags: string[];
    content: string;
    image?: string | null;
}

export const dummyData: Blog[] = [
    {
        "title": "기술 혁신의 미래",
        "topic": "Artificial Intelligence and Future Technologies",
        "tags": ["Artificial Intelligence", "Tech Innovation", "Future", "IT"],
        "content": "인공지능과 빅데이터 등 최신 기술의 발전은 산업 전반에 큰 혁신을 가져오고 있다. 새로운 알고리즘과 시스템의 도입으로 생산성과 효율성이 증대되고 있으며, 기업과 개인 모두 변화에 대비해 지속적으로 학습하고 혁신 전략을 마련해야 하는 시점이다.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
        "title": "도시 속 작은 휴식 공간",
        "topic": "Urban Regeneration and Healing Cafes",
        "tags": ["Urban Regeneration", "Cafe", "Healing", "Lifestyle"],
        "content": "복잡한 도시 생활 속에서 도심의 작은 힐링 공간은 중요한 역할을 한다. 독특한 인테리어와 아늑한 분위기를 갖춘 카페들은 방문객에게 잠시나마 일상의 피로를 잊게 해주며, 도시 재생의 모범 사례로 자리매김하고 있다.",
        // "image": "https://images.unsplash.com/photo-1554118811-1e0d58224f24"
    
        
    },
    {
        "title": "손쉽게 만드는 집에서 즐기는 브런치",
        "topic": "Cooking Recipes",
        "tags": ["Cooking", "Brunch", "Recipe", "Home Cooking"],
        "content": "바쁜 아침에도 집에서 손쉽게 준비할 수 있는 브런치 레시피를 소개한다. 간단한 재료와 조리법으로 건강하고 맛있는 식사를 완성할 수 있으며, 사진과 함께 요리 과정을 단계별로 안내해 누구나 따라 할 수 있도록 구성되었다.",
        "image": "https://images.unsplash.com/photo-1484723091739-30a097e8f929"
    },
    {
        "title": "자율주행차의 현재와 미래",
        "topic": "Automotive Technology",
        "tags": ["Autonomous Driving", "Automobile", "Technology", "Future Mobility"],
        "content": "자율주행차 기술은 빠르게 발전하며 미래 자동차 산업의 판도를 바꾸고 있다. 안전성과 효율성을 높인 다양한 시스템이 도입되고 있으며, 법적·제도적 문제 해결과 함께 상용화가 진행되면서 우리의 이동 방식에 큰 변화를 예고하고 있다.",
        "image": "https://images.unsplash.com/photo-1553260188-75a8d6205b6c"
    },
    {
        "title": "효율적인 업무를 위한 생산성 팁",
        "topic": "Self-Development and Work Efficiency",
        "tags": ["Productivity", "Self-Development", "Work Tips", "Time Management"],
        "content": "바쁜 업무 환경에서 효율성을 극대화하기 위한 다양한 생산성 팁을 소개한다. 체계적인 시간 관리와 우선순위 설정, 그리고 최신 도구의 활용법을 실제 사례를 통해 설명하며, 일과 삶의 균형을 맞추는 방법을 제시한다.",
        "image": "https://images.unsplash.com/photo-1499750310107-5fef28a66643"
    },
    {
        "title": "색다른 여행지, 숨은 명소 탐방기",
        "topic": "Travel and Culture",
        "tags": ["Travel", "Attractions", "Culture", "Domestic Travel"],
        "content": "대중적인 관광지를 벗어나 아직 많이 알려지지 않은 숨은 명소들을 탐방한 경험을 공유한다. 각 지역의 역사와 문화, 그리고 추천 방문 코스를 자세히 설명하며 여행의 새로운 즐거움을 선사하는 이야기를 전한다.",
        "image": "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800"
    },
    {
        "title": "스마트 홈, 편리함의 새로운 정의",
        "topic": "IoT and Smart Technology",
        "tags": ["Smart Home", "IoT", "Technology", "Convenience"],
        "content": "최신 IoT 기술을 적용한 스마트 홈 시스템은 생활의 편리함을 극대화하고 있다. 다양한 기기들이 유기적으로 연결되어 사용자에게 최적화된 환경을 제공하며, 에너지 절약과 보안 강화 등 실질적인 이점을 체감할 수 있다.",
        "image": "https://images.unsplash.com/photo-1558002038-bb0237f4476d"
    },
    {
        "title": "지속 가능한 패션, 친환경 의류 브랜드",
        "topic": "Fashion and Environment",
        "tags": ["Sustainability", "Eco-Friendly", "Fashion", "Clothing Brands"],
        "content": "환경 보호에 대한 관심이 높아지면서 지속 가능한 패션이 주목받고 있다. 친환경 소재와 공정 무역을 기반으로 한 의류 브랜드들이 늘어나고 있으며, 소비자들은 윤리적 소비를 통해 환경과 사회적 책임을 실천하고 있다.",
        "image": "https://images.unsplash.com/photo-1512436991641-6745cdb172"
    },
    {
        "title": "홈오피스 꾸미기, 나만의 작업 공간 만들기",
        "topic": "Interior Design and Lifestyle",
        "tags": ["Home Office", "Interior Design", "DIY", "Workspace"],
        "content": "재택근무가 보편화되면서 효율적인 홈오피스 환경 구축이 중요한 과제가 되었다. 공간 활용법과 합리적인 인테리어 소품 선택, 그리고 자잘한 팁들을 통해 나만의 작업 공간을 만드는 방법을 상세히 안내한다.",
        "image": "https://images.unsplash.com/photo-1511401139252-f158d3209c17"
    },
    {
        "title": "비건 라이프, 건강과 환경을 생각하다",
        "topic": "Health and Diet",
        "tags": ["Vegan", "Health", "Diet", "Environment"],
        "content": "비건 식단은 건강과 환경 보호를 동시에 실천할 수 있는 라이프스타일로 주목받고 있다. 다양한 비건 레시피와 영양 정보를 제공하며, 식재료 선택부터 조리법까지 자세히 설명하여 비건 생활에 도움을 주고자 한다.",
        "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
    },
    {
        "title": "사진으로 보는 자연의 아름다움",
        "topic": "Nature Photography and Travel",
        "tags": ["Photography", "Nature", "Landscape", "Travel"],
        "content": "아름다운 자연 풍경을 담은 사진들을 통해 자연의 경이로움을 재조명한다. 각 사진에 담긴 장소의 역사와 문화, 촬영 기법을 함께 소개하며, 독자들이 직접 자연의 아름다움을 경험할 수 있도록 감성적인 스토리를 전한다.",
        "image": "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d"
    },
    {
        "title": "코딩 입문자를 위한 기초 프로그래밍",
        "topic": "Programming Learning",
        "tags": ["Coding", "Programming", "Beginner", "Developer"],
        "content": "프로그래밍을 처음 시작하는 입문자들을 위한 기초 강좌를 준비했다. 주요 프로그래밍 언어의 기본 문법과 개념, 간단한 예제 코드를 통해 실습할 수 있도록 구성하였으며, 초보자들이 쉽게 접근할 수 있도록 설명을 덧붙였다.",
        "image": "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
    },
    {
        "title": "건강한 삶을 위한 운동 루틴",
        "topic": "Fitness and Health",
        "tags": ["Exercise", "Health", "Fitness", "Lifestyle"],
        "content": "일상 속에서 쉽게 따라 할 수 있는 운동 루틴과 스트레칭 방법을 제시한다. 각 운동의 효과와 올바른 자세, 주의사항을 상세히 설명하며, 건강한 생활 습관을 형성하기 위한 다양한 팁들을 함께 소개한다.",
        "image": "https://images.unsplash.com/photo-1517836357463-d25dfeac3438"
    },
    {
        "title": "재테크 기초 다지기",
        "topic": "Finance and Investment",
        "tags": ["Financial Management", "Investment", "Finance", "Economy"],
        "content": "재테크를 처음 시작하는 이들을 위해 금융의 기본 개념과 투자 전략을 소개한다. 저축과 투자 방법, 리스크 관리 등 경제 생활에 필요한 기초 지식을 사례와 함께 풀어내며, 안정적인 재정 관리의 중요성을 강조한다.",
        "image": "https://images.unsplash.com/photo-1460925895917-afdab827c52f"
    },
    {
        "title": "친환경 생활, 작은 습관의 변화",
        "topic": "Environmental Protection and Lifestyle",
        "tags": ["Eco-Friendly", "Eco Life", "Lifestyle", "Environmental Protection"],
        "content": "일상 속에서 실천할 수 있는 친환경 생활 습관을 다양한 사례와 함께 소개한다. 재활용, 에너지 절약, 무분별한 소비 줄이기 등 작은 변화들이 모여 큰 환경 보호 효과를 불러일으킬 수 있음을 강조한다.",
        "image": "https://images.unsplash.com/photo-1472145246862-b24cf25c4a36"
    },
    {
        "title": "디자인 트렌드, 미니멀리즘의 매력",
        "topic": "Design and Interior",
        "tags": ["Minimalism", "Design", "Trends", "Interior"],
        "content": "최근 각광받는 미니멀리즘 디자인은 단순함과 실용성을 동시에 추구한다. 불필요한 장식을 배제하고 핵심 요소만으로 공간의 아름다움을 표현하는 방법을 소개하며, 현대인의 라이프스타일에 적합한 디자인 철학을 전한다.",
        "image": "https://images.unsplash.com/photo-1449247709967-d4461a6a6103"
    },
    {
        "title": "자취생을 위한 간단 요리 레시피",
        "topic": "Solo Living and Cooking",
        "tags": ["Solo Living", "Cooking", "Recipe", "Easy Meals"],
        "content": "혼자 사는 자취생들을 위해 간단하면서도 맛있는 요리 레시피를 준비했다. 소량의 재료로 빠르게 만들 수 있는 메뉴들을 소개하며, 조리 과정과 꿀팁을 덧붙여 바쁜 일상 속에서도 건강한 식사를 즐길 수 있도록 안내한다.",
        "image": "https://images.unsplash.com/photo-1498837167922-ddd27525d352"
    },
    {
        "title": "책으로 떠나는 세계 여행",
        "topic": "Reading and Culture",
        "tags": ["Reading", "Travel", "Culture", "Book Recommendations"],
        "content": "책 한 권을 펼치면 마치 세계 곳곳을 여행하는 듯한 기분을 느낄 수 있다. 다양한 장르의 여행 관련 도서를 추천하며, 각 책 속에 담긴 문화와 역사를 통해 독자들이 간접 체험할 수 있도록 생생한 서술을 제공한다.",
        "image": "https://images.unsplash.com/photo-1474366521946-c3d4b507abf2"
    },
    {
        "title": "소프트웨어 개발, 코드 리뷰의 중요성",
        "topic": "Software Development and Collaboration",
        "tags": ["Development", "Code Review", "Collaboration", "Programming"],
        "content": "효율적인 소프트웨어 개발 환경을 위해 코드 리뷰는 필수적인 요소로 자리 잡았다. 개발자들 간의 협업과 커뮤니케이션을 강화하고, 코드 품질을 높이기 위한 다양한 방법론과 실제 사례를 통해 그 중요성을 재조명한다.",
        "image": "https://images.unsplash.com/photo-1516259762381-22954d7d3ad2"
    },
    {
        "title": "창업 이야기, 첫걸음을 내딛다",
        "topic": "Entrepreneurship and Startups",
        "tags": ["Entrepreneurship", "Startup", "Business", "Challenge"],
        "content": "창업의 꿈을 이루기 위해 준비해야 할 사항들과 실제 창업 사례를 상세히 소개한다. 초기 아이디어 구상부터 자금 조달, 팀 빌딩에 이르기까지 도전과 실패, 그리고 성공의 과정을 진솔하게 풀어내며 창업의 첫걸음을 응원한다.",
        "image": "https://images.unsplash.com/photo-1519389950473-47ba0277781c"
    }
]