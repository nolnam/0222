const styles = [
  "미니멀", "캐주얼", "스트릿", "빈티지", "포멀",
  "스포티", "보헤미안", "로맨틱", "클래식", "아방가르드",
];

const colors = [
  { name: "블랙", hex: "#000000" },
  { name: "화이트", hex: "#FFFFFF" },
  { name: "그레이", hex: "#9CA3AF" },
  { name: "네이비", hex: "#1E3A5F" },
  { name: "베이지", hex: "#D4B896" },
  { name: "브라운", hex: "#7C4B2A" },
  { name: "카키", hex: "#6B7A3E" },
  { name: "버건디", hex: "#800020" },
];

const seasons = ["봄", "여름", "가을", "겨울"];

export default function StylePage() {
  return (
    <div className="space-y-5">
      <div className="rounded-xl border border-gray-200 bg-white p-6">
        <h2 className="mb-1 text-lg font-semibold text-gray-900">스타일 선호도</h2>
        <p className="mb-6 text-sm text-gray-400">선택한 정보를 기반으로 AI가 코디를 추천해요.</p>

        <div className="space-y-6">
          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              선호 스타일 <span className="text-gray-400">(복수 선택 가능)</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {styles.map((style) => (
                <button
                  key={style}
                  className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-600 transition-colors hover:border-black hover:text-black"
                >
                  {style}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">
              선호 색상 <span className="text-gray-400">(복수 선택 가능)</span>
            </label>
            <div className="flex flex-wrap gap-3">
              {colors.map((color) => (
                <button
                  key={color.name}
                  className="flex items-center gap-2 rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-600 hover:border-black"
                >
                  <span
                    className="h-4 w-4 rounded-full border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  />
                  {color.name}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-3 block text-sm font-medium text-gray-700">선호 계절</label>
            <div className="flex gap-2">
              {seasons.map((season) => (
                <button
                  key={season}
                  className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-600 hover:border-black hover:text-black"
                >
                  {season}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">예산 범위</label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                placeholder="최소"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <span className="text-gray-400">~</span>
              <input
                type="number"
                placeholder="최대"
                className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
              />
              <span className="shrink-0 text-sm text-gray-500">만원</span>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
