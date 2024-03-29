import "./App.css";

function App() {
  return (
    <>
      <header className="text-gray-700 border-b-4 border-gray-200 bg-white sticky top-0">
        <div className="contziner flex mx-auto p-5 flex-col md:flex-row items-center">
          <a href="#" className="font-medium text-gray-900 mb-3 md:mb-0">
            <span className="text-xl ml-3">TKCode</span>
          </a>
          <nav className="md:ml-auto text-base">
            <a href="#home" className="mr-5 hover:text-blue-400">
              Home
            </a>
            <a href="#about" className="mr-5 hover:text-blue-400">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-blue-400">
              Skills
            </a>
            <a href="https://zenn.dev/tksaba" className=" hover:text-blue-400">
              Blog
            </a>
          </nav>
        </div>
      </header>

      <section className="text-gray-700" id="home">
        <div className="flex container mx-auto py-20 px-5 flex-col md:flex-row items-center">
          <div className="md:w-1/2 flex-grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left">
            <h1 className="text-3xl sm:text-6xl text-gray-900 font-medium mb-4">
              Hi!
              <br />
              I'm TK
            </h1>
            <p className="mb-8 leading-relaxed text-1xl font-medium text-gray-800">
              プログラムを楽しむ
              <br />
              プログラムをシンプルに
              <br />
              プログラムにコメントを
            </p>
            <button className="text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300">
              Contact
            </button>
          </div>
          <div className="md:w-1/2 lg:max-w-lg w-5/6">
            <img src="./img/icon.jpeg" alt="" />
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200" id="about">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-2xl sm:text-3xl font-medium mb-2 text-gray-900">
              About Me
            </h1>
            <p className="pb-10">2007年、滋賀県守山市生まれの16歳</p>
            <p>
              2023年度に舞鶴高専電気情報工学科入学し現在2年生
              <br />
              趣味はアニメ、プログラミング、ゲーム開発、ゲーム
              <br />
              舞鶴高専ではプログラマーズコミュニティー部に所属しUnity講習会とWebApp講習会を受講
              <br />
              Unityでのゲーム開発やWeb開発を主に行ってます
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/2 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full p-0.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14V6ZM5 6H19V14H5V6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Unity
                  </h2>
                </div>
                <div>
                  <p>
                    Unityでは高専祭にミニゲームを展示したり、趣味でゲームを作ったりしてます。いつかはゲーム開発の大会に出てみたいと考えています。下のリンクから私が作ったゲームのサンプルが遊べますぜひ遊んでみてください
                  </p>
                  <a
                    href="https://saba3939.github.io/2dAction/"
                    className="flex mt-3 text-green-500 items-center"
                  >
                    Play
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 p-4">
              <div className="bg-gray-100 rounded-lg p-8">
                <div className="flex items-center mb-3">
                  <div className="bg-green-500 text-white rounded-full p-0.5">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M3 6C3 4.89543 3.89543 4 5 4H19C20.1046 4 21 4.89543 21 6V14C21 15.1046 20.1046 16 19 16H5C3.89543 16 3 15.1046 3 14V6ZM5 6H19V14H5V6Z"
                        fill="currentColor"
                      />
                      <path
                        d="M2 18C1.44772 18 1 18.4477 1 19C1 19.5523 1.44772 20 2 20H22C22.5523 20 23 19.5523 23 19C23 18.4477 22.5523 18 22 18H2Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web開発
                  </h2>
                </div>
                <div>
                  <p>
                    Web開発では主にReactとTypeScriptを用いて開発をしています。まだまだ勉強中ですが作品を作れるように頑張りたいです。
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    More
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <h2 className=" text-gray-900 m-6 font-medium text-1xl sm:text-2xl">
              これまでの経歴
            </h2>
            <div className="text-white font-medium md:flex justify-center">
              <div className="m-2 underline md:w-1/4 bg-green-500 rounded-md p-4">
                高専祭自販機プロジェクト
              </div>
              <div className="m-2 underline md:w-1/4 bg-green-500 rounded-md p-4">
                高専祭EプロFlappyKosen
              </div>
              <div className="m-2 underline md:w-1/4 bg-green-500 rounded-md p-4">
                HackUKosen2023参加
              </div>
              <div className="m-2 underline md:w-1/4 bg-green-500 rounded-md p-4">
                舞鶴ハッカソン参加
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-700 border-t border-gray-200" id="skills">
        <div className="container px-5 py-24 mx-auto flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <img src="./img/pc.jpg" alt="" className="rounded" />
          </div>
          {/* right side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
              My Skills
            </h1>
            <div>
              <h2>Unity</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "60%" }}
                >
                  60%
                </div>
              </div>
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "50%" }}
                >
                  50%
                </div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "30%" }}
                >
                  30%
                </div>
              </div>
              <h2>React</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "25%" }}
                >
                  25%
                </div>
              </div>
              <h2>TypeScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: "20%" }}
                >
                  20%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
