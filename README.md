# 東関東馬事高等学院（バジガク）新公式サイト

千葉県山武市の「馬の学校」東関東馬事高等学院の新ホームページ。
Next.js 15（App Router）+ Tailwind CSS v4 + framer-motion で構築。

## 開発

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # 本番ビルド
npm start      # 本番サーバー
```

## ページ構成（10ページ + AI Q&A）

| # | ルート | 内容 |
|---|--------|------|
| 1 | `/` | TOPページ（お知らせ・コース・進路・YouTube・SNS・体験案内） |
| 2 | `/tokucho` | 本校の特徴（8つの特徴・校長メッセージ） |
| 3 | `/course` | コース紹介（一般高校乗馬・競走馬厩務員・騎手受験特別） |
| 4 | `/boshu` | 募集要項（入学までの流れ・学費） |
| 5 | `/opencampus` | 学校見学・オープンキャンパス（4泊5日体験合宿含む） |
| 6 | `/gaiyo` | 学校概要（概要・教育方針・沿革） |
| 7 | `/kyumuin` | 在学中にJRA厩務員を目指す方へ |
| 8 | `/support` | 不登校からの高校進学サポート |
| 9 | `/jockey` | JRA・地方競馬の騎手を目指す方へ |
| 10 | `/camp` | 中3対象・騎手課程受験 事前合宿 |
| ※ | `/qa` | AIよくある質問 Q&A（検索・カテゴリ絞り込み） |

## 素材

- `public/images/` — 現行サイト（bajigaku.net）から取得した写真・ロゴ一式
- フォント — 現行サイトはシステムフォントのため、新デザインでは Google Fonts
  （Noto Sans JP / Shippori Mincho B1）を `next/font` でセルフホスト
- ブランドカラー — 深緑（pine）×クリーム×ゴールド／CTAイエロー（現行サイトのアクセント色を踏襲）

## 主要ディレクトリ

```
app/          ルーティング（各ページ）
components/   共有UI（Header/Footer/PageHero/Section/CTABand/motion ほか）
lib/          サイト設定（site.ts）・FAQデータ
public/images 画像リポジトリ
```
