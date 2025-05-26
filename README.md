## like-and-dislike-buttons

要使用 pnpm install && pnpm dev

- 先建立 ReactionButtons
- 再根據 ReactionButtons 建立 DislikeButton 與 LikeButton
- 假設是給 topics list 用的，所以我做了 LikeOrDislikeButtons 並放在 feature 中
- 首頁提供 mock current number from api，假設 user 點擊與 server 數據是脫離的，看起來自然一些

## is-cycle-check

要使用 pnpm install && pnpm dev

- 將 setInterval 所在最小 component 中，避免外界不必要 rerender
- 特別加入現實環境時間 timestamp 做標記，防止 timer 被 idle 住時的 delay，應該誤差是小於 1000ms

## is-cycle-check

- 請執行 node main.js
- 使用 map 做整理線條，用 set 去 filter 被用過的線與判斷是否完成 cycle 或有多餘 cycle
