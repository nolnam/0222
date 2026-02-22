const notificationItems = [
  {
    group: "코디 추천",
    items: [
      { id: "daily-codi", label: "오늘의 코디 추천", desc: "매일 아침 AI가 추천하는 코디를 받아보세요." },
      { id: "weather-codi", label: "날씨 기반 코디 알림", desc: "날씨에 맞는 코디를 알려드려요." },
    ],
  },
  {
    group: "쇼핑",
    items: [
      { id: "discount", label: "할인/이벤트 알림", desc: "선호 브랜드의 세일 정보를 알려드려요." },
      { id: "restock", label: "재입고 알림", desc: "위시리스트 상품이 재입고되면 알려드려요." },
    ],
  },
  {
    group: "계정",
    items: [
      { id: "comment", label: "댓글 및 반응", desc: "내 코디에 댓글이나 좋아요가 달리면 알려드려요." },
      { id: "marketing", label: "마케팅 정보 수신", desc: "오픈클로의 새로운 기능과 소식을 받아보세요." },
    ],
  },
];

function Toggle({ id }: { id: string }) {
  return (
    <label htmlFor={id} className="relative inline-flex cursor-pointer items-center">
      <input id={id} type="checkbox" className="peer sr-only" defaultChecked />
      <div className="h-6 w-11 rounded-full bg-gray-200 peer-checked:bg-black after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all after:content-[''] peer-checked:after:translate-x-5" />
    </label>
  );
}

export default function NotificationsPage() {
  return (
    <div className="space-y-5">
      {notificationItems.map((group) => (
        <div key={group.group} className="rounded-xl border border-gray-200 bg-white p-6">
          <h3 className="mb-4 text-sm font-semibold text-gray-500 uppercase tracking-wide">
            {group.group}
          </h3>
          <ul className="divide-y divide-gray-100">
            {group.items.map((item) => (
              <li key={item.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <div>
                  <p className="text-sm font-medium text-gray-900">{item.label}</p>
                  <p className="mt-0.5 text-xs text-gray-400">{item.desc}</p>
                </div>
                <Toggle id={item.id} />
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="flex justify-end">
        <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
          저장
        </button>
      </div>
    </div>
  );
}
