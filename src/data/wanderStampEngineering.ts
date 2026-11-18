import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const wanderStampEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Let recipients follow a postcard’s journey while keeping their mailing details private.",
      contribution: "Built the server-side request validation and one-time receipt confirmation flow.",
      architecture: "Flutter calls Firebase Functions and reads separate private and public Firestore collections.",
      outcome: "The status update function writes the private record and its public tracking copy in one transaction."
    },
    workflow: {
      title: "From a request to public tracking",
      stages: [
        { label: "Request a postcard", detail: "The Flutter form sends mailing details and the chosen topic to a callable function." },
        { label: "Validate and split", detail: "The function validates the request and writes two documents together." },
        { label: "Read by audience", detail: "Admins can read the private record. Public tracking reads a separate document with approved fields." }
      ],
      caption: "The source requires the admin claim for management and a one-time receipt link for recipient confirmation. Live Firebase rollout was outside verification."
    },
    decision: "I limited public tracking to an explicit list of fields and kept recipient names and mailing addresses in the private record. The public map trades precision for privacy by rounding coordinates to a 0.25° grid."
  },
  zh: {
    facts: {
      problem: "讓收件人查詢明信片的寄送進度，同時保留郵寄資料的隱私。",
      contribution: "我實作了伺服器端的申請資料驗證，以及一次性的收件確認流程。",
      architecture: "Flutter 呼叫 Firebase Functions，並依用途讀取 Firestore 的私人紀錄或公開追蹤集合。",
      outcome: "更新寄送狀態時，函式在同一筆交易中寫入私人紀錄及對應的公開追蹤資料。"
    },
    workflow: {
      title: "從明信片申請到公開追蹤",
      stages: [
        { label: "申請明信片", detail: "Flutter 表單將郵寄資料與所選主題送至雲端函式。" },
        { label: "驗證並分開儲存", detail: "函式驗證申請資料，再一併建立私人與公開文件。" },
        { label: "依權限讀取", detail: "管理員可讀取私人紀錄。公開追蹤讀取另一份文件，僅含允許公開的欄位。" }
      ],
      caption: "原始碼中，管理操作須具備管理員權限。收件人則透過一次性連結確認收件。本次檢閱範圍為原始碼及前端發布。"
    },
    decision: "我逐一限定可公開的追蹤欄位，將收件人姓名與郵寄地址留在私人紀錄。公開地圖把座標捨入至 0.25 度網格，以較低的定位精度保護隱私。"
  }
};
