import type { NextPage } from 'next'
import GlobalHeader from "../components/globalHeader";
import Navigation from "../components/navigation";
import ProfileSection from "../components/profileSection";
import Link from "next/link";

const Home: NextPage = () => {
  return (
    <div className={'flex flex-col gap-8 p-4 md:p-16'}>
      <GlobalHeader />
      <Navigation items={[
        {label: 'About', linkTo: '/', isActive: true},
        {label: 'Articles', linkTo: '/articles', isActive: false},
        {label: 'Contact', linkTo: '/contact', isActive: false}
      ]} />
      <main className={'flex flex-col gap-8'}>
        <ProfileSection heading={'経歴'}>
          <ul>
            <li>2019年3月 東京工科大学コンピュータサイエンス学部卒業</li>
            <li>2019年4月〜2021年8月 Fringe81株式会社(現Unipos株式会社)</li>
            <li>2021年8月〜現在 note株式会社</li>
          </ul>
        </ProfileSection>
        <ProfileSection heading={'資格'}>
          <ul>
            <li>情報処理安全確保支援士試験 合格(2022年春期)</li>
            <li>応用情報技術者(2021年秋期)</li>
          </ul>
        </ProfileSection>
        <ProfileSection heading={'スキル・関心'}>
          <p className={'mb-2'}>TypeScript / React / Next.jsが好き。 <br/>過去にはElm / React Nativeなどを使ったプロダクト開発の経験あり。</p>
          <p>現在はNuxt.js / Ruby on Railsを使用したサーバーサイドアプリケーションの開発などに従事。</p>
        </ProfileSection>
        <ProfileSection heading={'リンク'}>
          <ul>
            <li><Link href={'https://note.com/mogamin3'} target={"_blank"} rel={'noreferrer noopenner'}><a>note</a></Link></li>
            <li><Link href={'https://github.com/uutarou10'} target={"_blank"} rel={'noreferrer noopenner'}><a>GitHub</a></Link></li>
            <li><Link href={'https://twitter.com/mogamin3'} target={"_blank"} rel={'noreferrer noopenner'}><a>Twitter</a></Link></li>
            <li><Link href={'https://zenn.dev/mogamin'} target={"_blank"} rel={'noreferrer noopenner'}><a>Zenn</a></Link></li>
            <li><Link href={'https://speakerdeck.com/uutarou10'} target={"_blank"} rel={'noreferrer noopenner'}><a>Speaker Deck</a></Link></li>
          </ul>
        </ProfileSection>
      </main>
    </div>
  )
}

export default Home
