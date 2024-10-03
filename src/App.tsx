import { LANGUAGE_CONSTANTS } from './constants/languageConstants';
import { sampleCode } from './constants/codeConstants';
import SyntaxHighLightCodeBlock from './components/SyntaxHighLighter/SyntaxHighLighter';
import SideMenu from './components/SideMenu/SideMenu';
import BadContainer from './components/BadCodeContainer/BadContainer';
import GoodContainer from './components/GoodCodeContainer/GoodContainer';
import SectionTitle from './components/SectionTitle/SectionTitle';
import PageTitle from './components/PageTitle/PageTitle';
import InfoContainer from './components/NoteContainer/NoteContainer';
import RequireTag from './components/RequireTag/RequireTag';
import RecommendTag from './components/RecommendTag/RecommendTag';
import CodeBlock from './components/CodeBlock/CodeBlock';
import DetailContainer from './components/DetailContainer/DetailContainer';

const htmlBadSnippet = `<!-- DOCTYPE宣言がない -->
<title>ページタイトル</title>
<main>メインコンテンツ <!-- 閉じタグがない -->`;
const htmlGoodSnippet = `<!DOCTYPE html>
<head>
<meta charset="utf-8">
<title>ページタイトル</title>
</head>
<body>
<main>メインコンテンツ</main>
</body>`;

function App() {
  return (
    <>
      <PageTitle>HTML</PageTitle>

      <SectionTitle>
        <RequireTag tailwindClass="mr-2" />
        HTMLの妥当性
      </SectionTitle>
      <p className="mb-4">可能な限り妥当性のあるHTMLを使用する。</p>
      <DetailContainer detailTitle="詳細">
        <p className="mb-4">
          HTMLの妥当性はHOGEHOGE等のツールを使用して検証します。
          <br />
          validatorにてエラーがあってもHTML Living
          Standardの仕様に準拠していれば許容します。
        </p>
        <BadContainer>
          <SyntaxHighLightCodeBlock
            language="html"
            codeSnippet={htmlBadSnippet}
          />
        </BadContainer>
        <GoodContainer>
          <SyntaxHighLightCodeBlock
            language="html"
            codeSnippet={htmlGoodSnippet}
          />
        </GoodContainer>
      </DetailContainer>
      {/* <p>
        これは
        <CodeBlock codeSnippet="default/javascript" />
        を参照してください
      </p>
      <RequireTag />
      <RecommendTag />
      <SideMenu />
      <section>
        <PageTitle>
          <RecommendTag tailwindClass="mr-2" />
          ページタイトル
        </PageTitle>
        <SectionTitle>
          <RequireTag tailwindClass="mr-2" />
          セクションタイトル
        </SectionTitle>
        <DetailContainer detailTitle="詳細">
          <BadContainer>
            <SyntaxHighLightCodeBlock
              language={LANGUAGE_CONSTANTS.TYPESCRIPT}
              codeSnippet={sampleCode}
            />
          </BadContainer>

          <GoodContainer>
            <SyntaxHighLightCodeBlock
              language={LANGUAGE_CONSTANTS.TYPESCRIPT}
              codeSnippet={sampleCode}
            />
          </GoodContainer>
        </DetailContainer>

        <InfoContainer containerLabel="ワンポイント">
          ここにNoteの内容を記述すると、中身が表示されるようになります。
          素晴らしいですね！
        </InfoContainer>
      </section> */}
    </>
  );
}

export default App;
