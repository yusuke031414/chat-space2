# README
## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false|
|email|string|null: false|
|password|string|null: false|

### Association
- has_many :messeges
- has_many :groups, through: :member
- has_many :members

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|

### Association
- has_many :users, through: :member
- has_many :members
- has_many :messages

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|body|text|
|image|text|
|group|references|null: false|
|user|references|null: false|

### Association
- belongs_to :user
- belongs_to :group
