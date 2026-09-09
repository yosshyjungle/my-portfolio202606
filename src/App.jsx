import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='text-gray-700 border-b border-gray-200'>
        <div className='container flex mx-auto p-5 flex-col md:flex-row items-center'>
          <a href="#" className='font-medium text-gray-900 mb-4 md:mb-0'>
            <span className='text-xl ml-3'>NisshoCode</span>
          </a>
          <nav className='md:ml-auto text-base'>
            <a href="#home" className='mr-5 hover:text-blue-400 duration-300'>Home</a>
            <a href="#about" className='mr-5 hover:text-blue-400 duration-300'>About</a>
            <a href="#skills" className='mr-5 hover:text-blue-400 duration-300'>Skills</a>
            <a href="#blog" className='hover:text-blue-400 duration-300'>Blog</a>
          </nav>
        </div>
      </header>
      <section className='text-gray-700' id="home">
        <div className='flex container mx-auto py-20 px-5 flex-col md:flex-row items-center'>
          <div className='md:w-1/2 grow mb-16 lg:pr-24 md:pr-16 text-center md:text-left'>
            <h1 className='text-3xl sm:text-6xl tex-gray-900 font-medium mb-4'>NisshoCode<br />
            My Portfolio WebSite</h1>
            <p className='mb-8 leading-relaxed'>現在、Webエンジニアとしてデビューしたてのほやほやです。得意な言語はHTML, CSS, JavaScript, TypeScript, PHP, SQL, ReactなどWeb全般とPythonです。自身が作ったものを公開しておりますので、ぜひ見ていってください。</p>
            <button className='text-white bg-green-500 py-2 px-6 border-0 rounded text-lg hover:bg-green-600 duration-300'>Contact Me</button>
          </div>
          <div className='md:w-1/2 lg:max-w-lg w-5/6'>
            <img src="./img/myPicture.png" alt="" />
          </div>
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='text-center mb-20'>
            <h1 className='text-2xl sm:text-3xl font-medium mb-2 text-gray-900'>About me</h1>
            <p className='pb-10'>これまで、マーケティング業界で数年財務分析を行っていました。現在はIT業界でシステム構築に従事しながら副業でとしてWebサイトやWebAppを個人として受注しています。また投資やコンサルティングも積極的に行っており、ご相談されたい方はコンタクトお待ちしています。</p>
            <p>以下に個人としての成果物を公開しています。主にSNSなどのChatアプリの構築をReactのJSやTSで実装しています。また、Pythonを使ってAIによる株価の予測サイトを構築しました。また数件の事務所のWebサイトの構築など多岐にわたります。</p>
          </div>
          <div className='flex flex-wrap'>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 5.5485L10.1954 4.58174V11.6106L3.00672 11.6651L3 5.5485ZM10.1954 12.3909V19.4957L3.00571 18.5105L3.0053 12.3909H10.1954ZM11.1134 4.45599L20.9977 3V11.5334L11.1134 11.6106V4.45599ZM21 12.505L20.9977 21L11.1134 19.6466V12.505H21Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>
                <div>
                  <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css firebase, AWS, ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
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
                      d="M16.4975 5.02988C16.4973 5.07798 16.4959 5.12581 16.4934 5.17335C17.662 5.58332 18.5 6.69628 18.5 8.00496V9.00493H19.5V13.0049H18.5V16.005C18.5 17.3129 17.663 18.4254 16.4953 18.8359C16.4984 18.8919 16.5 18.9482 16.5 19.005C16.5 20.6618 15.1569 22.005 13.5 22.005H9.5C7.84315 22.005 6.5 20.6618 6.5 19.005C6.5 18.9482 6.50158 18.8919 6.50468 18.8359C5.33705 18.4254 4.5 17.3129 4.5 16.005V8.00496C4.5 6.69767 5.33618 5.58568 6.50286 5.17465C6.49907 5.11032 6.4973 5.04546 6.49763 4.98011C6.50587 3.32328 7.85569 1.98683 9.51252 1.99508L13.5125 2.01499C15.1693 2.02324 16.5058 3.37305 16.4975 5.02988ZM8.49764 5.00496H14.4975C14.4922 4.45954 14.0498 4.01769 13.5025 4.01496L9.50257 3.99505C8.95029 3.99231 8.50035 4.43779 8.4976 4.99006L8.49764 5.00496ZM15.7049 7.02596L11.4846 7.00496H7.5C6.94772 7.00496 6.5 7.45267 6.5 8.00496V16.005C6.5 16.5568 6.94696 17.0042 7.4986 17.005H15.5014C16.053 17.0042 16.5 16.5568 16.5 16.005V8.00496C16.5 7.52289 16.1589 7.12049 15.7049 7.02596ZM8.5 19.005C8.5 19.5572 8.94772 20.005 9.5 20.005H13.5C14.0523 20.005 14.5 19.5572 14.5 19.005H8.5Z"
                      fill="currentColor"
                    />
                  </svg>
                  </div>
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>
                <div>
                  <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css firebase, AWS, ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>
            <div className='md:w-1/3 p-4'>
              <div className='bg-gray-100 rounded-lg p-8'>
                <div className='flex items-center mb-3'>
                  <div className='bg-green-500 text-white rounded-full'>
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
                  <h2 className='text-gray-900 text-lg font-medium ml-2'>SNS Chat App</h2>
                </div>
                <div>
                  <p>ReactとJavaScriptで投稿機能付きのChatアプリ。仕様はReact, JavaScript, html, css firebase, AWS, ログイン・ログアウト認証機能、メッセージ投稿機能、検索機能、お気に入り登録機能を実装しています。</p>
                  <a href="#" className='mt-3 text-green-500 items-center'>もっと見る</a>
                </div>
              </div>
            </div>
          </div> 
        </div>
      </section>
      <section className='text-gray-700 border-t border-gray-200'>
        <div className='container px-5 py-24 mx-auto flex flex-wrap'>
          {/* left side */}
          <div className='mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center'>
            <img src="./img/pc.jpg" alt="" className='rounded'/>
          </div>
          {/* right side */}
          <div className='lg:pl-12 lg:py-6 w-full lg:w-1/2'>
            <h1 className='text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left'>My Skills</h1>
            <div className='w-full'>
              <h2>HTML/CSS</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-green-600 text-xs leading-none py-1 text-center text-white' style={{width:"85%"}}>85%</div>
              </div>
              <h2>JavaScript</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-orange-600 text-xs leading-none py-1 text-center text-white' style={{width:"75%"}}>75%</div>
              </div>
              <h2>React</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-blue-600 text-xs leading-none py-1 text-center text-white' style={{width:"60%"}}>60%</div>
              </div>
              <h2>Python</h2>
              <div className='shadow bg-green-100 mt-2 w-full'>
                <div className='bg-yellow-600 text-xs leading-none py-1 text-center text-white' style={{width:"70%"}}>70%</div>
              </div>
            </div>
          </div>
        </div>
      </section>
     </>
  )
}

export default App
