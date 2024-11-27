# aws-handson-from-scratch-guide-repository

このリポジトリは、書籍「0から始めるAWS実践ガイド -クラウド時代のアプリ開発-」で使用するコードをまとめたものです。各フォルダには、ハンズオンに必要なアプリケーションコードとCloudFormationテンプレートが含まれています。

## フォルダ構成
```
aws-handson-from-scratch-guide-repository/
├── LICENSE                    # ライセンスファイル
├── README.md                  # 本ファイル
├── 01.ec2-handson/            # EC2ハンズオン用フォルダ
├── 02.ecs-handson/            # ECSハンズオン用フォルダ
└── 03.cloudfront-s3-handson/  # CloudFrontハンズオン用フォルダ
```

### 01.ec2-handson
EC2を使用したハンズオンで使用するファイルが格納されています。
- **`app`**: ハンズオンでデプロイするアプリケーションコード。
- **`CloudFormation`**: EC2リソースをセットアップするためのCloudFormationテンプレート。

### 02.ecs-handson
ECS (Amazon Elastic Container Service) を使用したハンズオンで使用するファイルが格納されています。
- **`app`**: ハンズオンでデプロイするコンテナアプリケーションコード。
- **`CloudFormation`**: ECSクラスタや関連リソースを構築するためのテンプレート。

### 03.cloudfront-s3-handson
CloudFrontとS3を組み合わせたハンズオンで使用するファイルが格納されています。
- **`app`**: ハンズオンでデプロイする静的アプリケーションコード。
- **`CloudFormation`**: S3バケットとCloudFrontディストリビューションをセットアップするテンプレート。

## リポジトリの取得方法

### 方法1: Gitを使用してクローンする
Gitをインストール済みの場合、以下のコマンドを実行することでリポジトリをクローンできます。

```bash
git clone https://github.com/wakariyasuku/aws-handson-from-scratch-guide-repository.git
```

クローンしたリポジトリは現在のディレクトリ内に aws-handson-from-scratch-guide-repository フォルダとして作成されます。

### 方法2: ZIPファイルとしてダウンロードする
Gitを使用しない場合、リポジトリをZIPファイルとしてダウンロードできます。

1. リポジトリの[GitHubページ](https://github.com/wakariyasuku/aws-handson-from-scratch-guide-repository)を開きます。
2. **"Code"** ボタンをクリックします。
3. ドロップダウンメニューから **"Download ZIP"** を選択します。
4. ダウンロードしたZIPファイルを解凍して使用してください。

## 対応する書籍
- タイトル: **0から始めるAWS実践ガイド -クラウド時代のアプリ開発-**
- 著者: 小塚豊, 旭浩平

詳細は本書をご参照ください。

---

本リポジトリはAWSの各サービスを学ぶことを目的としており、実務に利用する際は必要に応じてセキュリティやコスト管理を考慮してください。

## ライセンス
このリポジトリのコードはMITライセンスに基づいて配布されています。詳細は [LICENSE](./LICENSE) ファイルを参照してください。

## お問い合わせ
不明点や質問がある場合は、yutaka.kozuka.aws@gmail.comにお問い合わせください。
