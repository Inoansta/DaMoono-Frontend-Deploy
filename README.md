# 다무너 (DaMoono) 🐙

### AI 기반 통신사 요금제 추천 및 실시간 상담 서비스

**다무너(DaMoono)**는
사용자의 통신 사용 패턴과 성향을 분석해 최적의 요금제를 추천하고,
AI 챗봇과 실시간 상담사 연결을 결합하여
**자동화 상담 + 사람 상담의 장점을 동시에 제공하는 서비스**입니다.

---

## 📌 프로젝트 개요

| 항목     | 내용                        |
| ------ | ------------------------- |
| 프로젝트명  | 다무너 (DaMoono)             |
| 서비스 주제 | AI 기반 통신사 요금제 추천 및 실시간 상담 |
| 문제 정의  | 요금제 정보 과잉, 비교 기준의 복잡성     |
| 해결 방식  | AI 추천 + 실시간 상담 병행         |
| 개발 기간  | 2025.01 ~ 진행 중            |
| 팀 구성   | Frontend · Backend · AI   |

---

## 🔧 주요 기능

### 1. 🤖 AI 챗봇 요금제 추천 (텍스트 / 음성)

| 기능 미리보기           | 기능 설명                                                                                                                                                                                                                                                         |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이미지 / GIF / 시연 영상 | LangChain과 OpenAI GPT 모델을 기반으로 한 **대화형 요금제 추천 기능**입니다. 사용자의 질문을 단순 응답이 아닌, 의도 분석 → 프롬프트 생성 → 요금제 후보 도출 → 카드형 응답 렌더링의 단계로 처리합니다. 대화 히스토리는 체인 메모리로 관리하여 재접속 시에도 문맥이 유지되며, Web Speech API를 활용해 음성 입력을 지원합니다. AI 응답은 JSON Schema 기반으로 정의하여 UI와 AI 로직을 명확히 분리했습니다. |

**핵심 기술 포인트**

* LangChain Conversation Chain 기반 대화 흐름 설계
* Prompt Template 분리로 추천 로직 확장성 확보
* 음성 입력 실패 시 텍스트 입력으로 fallback 처리

---

### 2. 💬 실시간 1:1 상담 시스템 (WebSocket)

| 기능 미리보기   | 기능 설명                                                                                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이미지 / GIF | AI 상담으로 해결되지 않는 경우를 대비한 **실시간 상담사 연결 기능**입니다. Socket.IO 기반 WebSocket 통신을 사용하여 사용자와 상담사를 1:1로 매칭합니다. 상담 요청 시 서버에서 대기 세션을 관리하고, 상담사가 입장하면 Room을 생성하여 메시지를 중계합니다. 상담 종료 시 세션 정리 및 상태 초기화를 통해 안정적인 연결 관리를 구현했습니다. |

**핵심 기술 포인트**

* Room 기반 1:1 채팅 구조
* 세션 상태 머신 (대기 → 연결 → 종료)
* 싱글톤 Socket 서버로 연결 관리

---

### 3. 📊 요금제 탐색 및 비교

| 기능 미리보기   | 기능 설명                                                                                                                                                                                      |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| 이미지 / GIF | 통신망(LTE/5G), 가격, 혜택 조건을 기준으로 요금제를 탐색하고 비교할 수 있는 기능입니다. Chart.js를 활용해 데이터량·요금·혜택을 시각적으로 비교할 수 있도록 구성했으며, FlipCard UI를 적용해 정보 과부하를 줄였습니다. Framer Motion을 사용해 비교 모드 전환 시 자연스러운 애니메이션을 구현했습니다. |

**핵심 기술 포인트**

* 요금제 공통 데이터 모델 정의
* 시각화 컴포넌트 재사용 구조
* 비교 기준 변경 시 최소 리렌더링

---

### 4. 🎭 성향 테스트 기반 추천

| 기능 미리보기   | 기능 설명                                                                                                                                                             |
| --------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 이미지 / GIF | 사용자의 통신 사용 패턴을 파악하기 위한 성향 테스트 기능입니다. 데이터 사용량, 통화 빈도, 가격 민감도 등 6가지 카테고리 질문을 통해 성향을 분류하며, 해당 결과를 AI 챗봇 프롬프트에 전달해 추천 정확도를 향상시켰습니다. 질문과 결과는 JSON 구조로 관리해 확장성을 고려했습니다. |

**핵심 기술 포인트**

* 점수 기반 rule system
* 성향 결과와 AI 추천 로직 연동
* 질문 데이터 구조화

---

### 5. 📱 채팅 모드 분리 구조

| 모드     | 설명         | 특징                  |
| ------ | ---------- | ------------------- |
| AI 채팅  | AI 챗봇과 대화  | 요금제 추천 · 정보 제공      |
| 상담 채팅  | 실시간 상담사 연결 | WebSocket 기반 1:1 상담 |
| 관리자 모드 | 상담사 전용     | 상담 세션 관리            |
| 가이드 모드 | FAQ        | 서비스 사용 안내           |

---

## ⚔️ 기술 스택

| 분야         | 기술 스택                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Frontend   | ![React](https://img.shields.io/badge/React-61DAFB?logo=react\&logoColor=black) ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript\&logoColor=white) ![Vite](https://img.shields.io/badge/Vite-646CFF?logo=vite\&logoColor=white) ![React Router](https://img.shields.io/badge/React%20Router-CA4245?logo=reactrouter) ![Vanilla Extract](https://img.shields.io/badge/Vanilla%20Extract-CB9DF0) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-black?logo=framer) |
| State / UI | ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io) ![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?logo=chartdotjs\&logoColor=white) ![React Markdown](https://img.shields.io/badge/React%20Markdown-000000)                                                                                                                                                                                                                                                               |
| Backend    | ![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js\&logoColor=white) ![Express](https://img.shields.io/badge/Express-000000?logo=express) ![Socket.IO](https://img.shields.io/badge/Socket.IO-010101?logo=socket.io)                                                                                                                                                                                                                                                                       |
| AI         | ![LangChain](https://img.shields.io/badge/LangChain-4B0082) ![OpenAI](https://img.shields.io/badge/OpenAI-412991?logo=openai\&logoColor=white)                                                                                                                                                                                                                                                                                                                                                              |
| Dev Tools  | ![Git](https://img.shields.io/badge/Git-F05032?logo=git\&logoColor=white) ![GitHub](https://img.shields.io/badge/GitHub-181717?logo=github) ![Biome](https://img.shields.io/badge/Biome-60A5FA) ![ESLint](https://img.shields.io/badge/ESLint-4B32C3?logo=eslint)                                                                                                                                                                                                                                           |

---

## 📦 설치 및 실행

### 사전 요구사항

* Node.js 18.x 이상
* npm 또는 yarn
* Git

### 환경 변수 설정

**Frontend (.env)**

```env
VITE_API_URL=http://localhost:3000
VITE_SOCKET_URL=http://localhost:3000
```

**Backend (.env)**

```env
PORT=3000
OPENAI_API_KEY=your_openai_api_key_here
NODE_ENV=development
```

### 설치 방법

```bash
git clone https://github.com/Da-Moono/DaMoono-Frontend.git
git clone https://github.com/Da-Moono/DaMoono-Backend.git
```

```bash
cd DaMoono-Frontend
npm install
npm run dev
```

```bash
cd DaMoono-Backend
npm install
npm run dev
```

---

## 🏗️ 시스템 아키텍처

```
Frontend (React + Vite)
   ↕ REST API / WebSocket
Backend (Node.js + Express + Socket.IO)
   ↕
LangChain + OpenAI API
```

---

## 🔄 플로우 차트
**Service**
<img width="4377" height="2305" alt="플로우 차트 - service" src="https://github.com/user-attachments/assets/fbdb17bb-3782-4aeb-b288-3242c1b4c541" />

**Admin**
<img width="3744" height="1610" alt="플로우 차트 - admin" src="https://github.com/user-attachments/assets/cab51841-2acc-4632-8cf6-8e177b079940" />

**상담 흐름**
1. 상담 요청
2. 대기 세션 등록
3. 상담사 매칭
4. 실시간 상담
5. 세션 종료
