import type { LocalizedEngineeringStory } from "../types/projectEngineering";

export const craftFocusEngineering: LocalizedEngineeringStory = {
  en: {
    facts: {
      problem: "Help players build a focus habit with seeds they can spend on room items and crafts.",
      contribution: "Built the Expo timer and PostgreSQL functions for seed rewards and craft claims.",
      architecture: "The public web demo saves progress in IndexedDB. Supabase mode uses sign-in and stores player state in PostgreSQL.",
      outcome: "A database concurrency test checks that two simultaneous finishes of the same run create one history entry and credit the wallet once."
    },
    workflow: {
      title: "How a signed-in session earns seeds",
      stages: [
        { label: "Start a session", detail: "The signed-in Expo client asks Supabase to record the start and receives a run ID." },
        { label: "Check completion", detail: "The reward function verifies run ownership and checks elapsed time against the database clock." },
        { label: "Save the reward", detail: "One transaction records session history, credits the wallet, and marks the run as finished." }
      ],
      caption: "Row-level security limits each player's wallet reads to their own balance. The database function handles reward writes."
    },
    decision: "I put the balance check, seed deduction, and collectible grant in one database call so a failed claim cannot leave a partial deduction. Claiming another player's craft requires a signed-in connection to Supabase.",
    previewCaption: "The Supabase sign-in screen previews how focus time earns seeds for room items."
  },
  zh: {
    facts: {
      problem: "讓玩家透過專注累積種子，再兌換房間道具與手作收藏，培養持續專注的習慣。",
      contribution: "我開發了 Expo 專注計時器，以及發放種子和兌換手作的 PostgreSQL 函式。",
      architecture: "公開網頁示範用 IndexedDB 儲存進度。Supabase 模式須登入，並將玩家資料存入 PostgreSQL。",
      outcome: "資料庫並行測試檢查同一筆專注紀錄同時收到兩次結束請求時，是否只新增一筆歷史紀錄並發放一次獎勵。"
    },
    workflow: {
      title: "登入後如何取得專注獎勵",
      stages: [
        { label: "開始專注", detail: "玩家登入後，Expo 用戶端請 Supabase 記錄開始時間並取得專注紀錄 ID。" },
        { label: "檢查完成狀態", detail: "獎勵函式確認紀錄屬於目前玩家，並以資料庫時間檢查已經過多久。" },
        { label: "寫入獎勵", detail: "在同一筆交易中新增歷史紀錄、將種子存入錢包，並標記本次專注已結束。" }
      ],
      caption: "資料列層級安全政策讓玩家只能讀取自己的錢包餘額，獎勵則由資料庫函式寫入。"
    },
    decision: "我把餘額檢查、種子扣款與收藏品發放放在同一次資料庫呼叫，避免兌換失敗時已扣款卻未取得收藏品。兌換其他玩家的手作要登入並連線至 Supabase。",
    previewCaption: "Supabase 模式的登入畫面示範如何透過專注累積種子、兌換房間道具。"
  }
};
