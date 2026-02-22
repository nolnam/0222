export default function ProfilePage() {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-6">
      <h2 className="mb-6 text-lg font-semibold text-gray-900">프로필</h2>

      <div className="space-y-6">
        <div className="flex items-center gap-5">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100 text-3xl">
            👤
          </div>
          <button className="rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">
            사진 변경
          </button>
        </div>

        <div className="grid gap-4">
          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              닉네임
            </label>
            <input
              type="text"
              defaultValue="스타일리스트123"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              이메일
            </label>
            <input
              type="email"
              defaultValue="user@example.com"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              성별
            </label>
            <select className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black">
              <option>선택 안 함</option>
              <option>남성</option>
              <option>여성</option>
              <option>기타</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-gray-700">
              생년월일
            </label>
            <input
              type="date"
              className="w-full rounded-lg border border-gray-300 px-3 py-2 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black"
            />
          </div>
        </div>

        <div className="flex justify-end">
          <button className="rounded-lg bg-black px-5 py-2 text-sm font-medium text-white hover:bg-gray-800">
            저장
          </button>
        </div>
      </div>
    </div>
  );
}
