const path = require("path");

module.exports = {
  /**
   * @desc mode
   * 'development' : 소스맵 기본 포함, 최소한의 압축(공백제거, 변수명 단순화 등) -> 디버깅 쉬운 환경 제공
   * 'production' : 최대한 압축(코드 압축, tree shaking 등) 고급 최적화 -> 파일 크기 최소화에 집중
   * 'none' : 최적화 없음, 소스맵 제외 -> 모든 설정 커스터마이징 때 사용
   */
  mode: "development",
  entry: "./main.tsx", // 어떤 파일을 진입점으로 번들링할지
  output: {
    filename: "bundle.js", // 번들로 만들어질 파일 이름
    path: path.resolve(__dirname, "dist"), // 번들 파일이 저장될 위치
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/, // .ts 또는 .tsx 파일들은 모두 처리
        use: [
          {
            loader: "babel-loader", // babel-loader를 사용하여 TSX 파일을 JSX로 변환
            options: {
              presets: [
                "@babel/preset-env", // 최신 JS 문법이 구 브라우저에서도 작동하게 변환해줌
                [
                  "@babel/preset-react", // 바벨이 react 문법(JSX)을 어떤 식으로 변환할지 알려주는 설정
                  {
                    runtime: "automatic", // 자동 JSX 변환 활성화
                  },
                ],
                "@babel/preset-typescript", // 바벨이 typescript 문법을 어떤 식으로 변환할지 알려주는 설정
              ],
            },
          },
        ],
        // use: "ts-loader", // ts-loader를 사용하여 타입스크립트 파일을 자바스크립트로 변환
        exclude: /node_modules/, // node_modules 폴더는 제외
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"], // .ts 파일과 .js 파일을 확장자 생략해도 처리할 수 있도록 설정
  },
};
