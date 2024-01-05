# spark-2023-teamS(DeliDev)

## サービスの概要

配送業者の代わりに代理人（ユーザー）が配送を行い、受取人（ユーザー）は指定の時間と場所で宅配物を受け取ることができるサービス

## 想定されるユーザー

- 再配達をして欲しいが、運送業者の営業時間内には家に居ない人、置き配ができない人
- 出先（キャンプ場など）で荷物を受け取りたい人
- より詳細な時間設定で配達をお願いしたい人

## 設計

- [API](/docs/openapi.yaml)

- [DB](/docs/db.md)

## デモ動画

[![DeliDev](https://github.com/km1110/spark-2023-teamS/assets/83264443/e4c080e4-9b62-4360-bd9a-50676fc3974f)](https://www.youtube.com/watch?v=vyG6mZTVlj8)

### 利用者側

#### 選択画面

<img width="700" src="https://github.com/km1110/spark-2023-teamS/assets/83264443/5a15a5cf-b776-40c4-b1e8-1f36c37f5eac">

利用者は、配達して欲しい日付を選択し、対応可能な人物に対して直接依頼を頼む事ができる

#### 支払い画面

<img width="700" src="https://github.com/km1110/spark-2023-teamS/assets/83264443/b94cb5e8-c992-468c-ac5a-932994f13118">

依頼日時が決まったら、配送場所と配送予定時間を選択することで依頼が完了となる

### 配達人側

#### スケジュール画面

<img width="700" src="https://github.com/km1110/spark-2023-teamS/assets/83264443/a4ff59af-e9bf-4eec-a87d-34add4827345">

配送人は画像右側の「配達の依頼」から配達の依頼を受けることができたり、画面右下の「配達シフト」から対応可能時間を追加し依頼を受け付けることができる
