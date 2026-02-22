# 오픈클로 설정 사이트

AI 기반 의류 코디 추천 서비스 **오픈클로**의 사용자 설정 페이지입니다.

## 기능

| 페이지 | 경로 | 설명 |
|--------|------|------|
| 프로필 | `/settings/profile` | 닉네임, 이메일, 성별, 생년월일 관리 |
| 스타일 선호도 | `/settings/style` | 선호 스타일, 색상, 계절, 예산 범위 설정 |
| 알림 설정 | `/settings/notifications` | 코디 추천, 쇼핑, 계정 알림 토글 |

## 기술 스택

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**

## 실행 방법

```bash
npm install
npm run dev
```

`http://localhost:3000` 접속 시 `/settings/profile`로 자동 이동합니다.
