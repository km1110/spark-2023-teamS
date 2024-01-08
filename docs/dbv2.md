# ER 図

DeliDeV のデータベース設計（Ver.2.0.0：2023/10/05）

## データベース

```mermaid
---
title: "DeliDevのDB"
---
erDiagram
    users ||--|{ user_role : ""
    users ||--o{ orders : ""
    users ||--o{ reviews : ""
    users ||--o{ deliverys : ""
    users ||--o{ deliverer_vehicle : ""

    orders ||--|| deliverys : ""


    roles ||--o{ user_role : ""

    vehicles ||--o{ deliverer_vehicle : ""

    users {
      varchar id PK "ID"
      varchar firebase_uid "firebase uid"
      varchar username "ユーザー名"
      varchar email "メールアドレス"
      vatchar postal_code "郵便番号"
      varchar prefecture "都道府県"
      varchar city "市町村"
      varchar address1 "番地"
      varchar address2 "部屋番号"
      timestamp created_at "作成日時"
      timestamp updated_at "更新日時"
      timestamp deleted_at "削除日時"
    }

    roles {
      varchar id PK "ID"
      varchar role_name "ロール名"
    }

    user_role {
      varchar user_id FK "ユーザーID"
      varchar role_id FK "ロールID"
    }

    vehicles {
      varchar id PK "ID"
      varchar name "車両名"
    }

    deliverer_vehicle {
      varchar deliverer_id FK "配達人ID"
      varchar vehicle_id FK "車両ID"
    }

    orders {
      varchar id PK "ID"
      varchar user_id FK "ユーザーID"
      datetime delivery_time "配送希望時間"
      timestamp created_at "作成日時"
      timestamp updated_at "更新日時"
      timestamp deleted_at "削除日時"
    }

    reviews {
      varchar id PK "ID"
      varchar user_id FK "ユーザーID"
      varchar deliverer_id FK "配送人ID"
      number review "レビュー値"
      text comment "コメント"
      datetime date "レビュー日"
      timestamp created_at "作成日時"
      timestamp updated_at "更新日時"
      timestamp deleted_at "削除日時"
    }

    deliverys {
      varchar id PK "ID"
      varchar order_id FK "注文ID"
      varchar deliverer_id FK "配送人ID"
      enum delivery_status "配送ステータス"
      datetime date "配送予定時間"
      timestamp created_at "作成日時"
      timestamp updated_at "更新日時"
      timestamp deleted_at "削除日時"
    }


```
