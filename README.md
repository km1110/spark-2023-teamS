# spark-2023-teamS(DeliDev)

## サービスの概要

配送業者の代わりに代理人（ユーザー）が配送を行い、受取人（ユーザー）は指定の時間と場所で宅配物を受け取ることができるサービス

## 想定されるユーザー

- 再配達をして欲しいが、運送業者の営業時間内には家に居ない人、置き配ができない人
- 出先（キャンプ場など）で荷物を受け取りたい人
- より詳細な時間設定で配達をお願いしたい人

## ユーザーの持つ課題

- 自宅にある宅配 BOX が満杯で使えない
- よりピンポイントな時間指定で宅配物を届けて欲しい
- オートロックで置き配ができない

## 設計

### API

- [API](/docs/openapi.yaml)

### DB

- [DB](/docs/db.md)

## デモ動画
[![DeliDev](https://github.com/km1110/spark-2023-teamS/assets/83264443/e4c080e4-9b62-4360-bd9a-50676fc3974f)](https://www.youtube.com/watch?v=vyG6mZTVlj8)

### 利用者側
![buyer_select_page](https://github.com/km1110/spark-2023-teamS/assets/83264443/5a15a5cf-b776-40c4-b1e8-1f36c37f5eac)
![buyer_decide_page](https://github.com/km1110/spark-2023-teamS/assets/83264443/b94cb5e8-c992-468c-ac5a-932994f13118)

### 配達人側
![buyer_select_page](https://github.com/km1110/spark-2023-teamS/assets/83264443/5052e051-8dc4-4df2-bcf1-65f8bd837299)
