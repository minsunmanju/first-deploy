import { Mail, Phone, MapPin, Github, Code } from "lucide-react";
import { SiHtml5, SiCss3, SiJavascript, SiReact } from "react-icons/si";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white text-gray-800 p-8">
      {/* Header */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold mb-4 text-sky-600">김민선</h1>
        <p className="text-xl text-gray-600">끝없이 성장하는 개발자</p>
      </section>

      {/* Contact Info */}
      <section className="flex flex-wrap justify-center gap-8 mb-16 max-w-5xl mx-auto">
        <div className="flex items-center space-x-3 text-sky-600 hover:text-sky-800 transition">
          <Phone className="w-6 h-6" /> <span>010-3027-1608</span>
        </div>
        <div className="flex items-center space-x-3 text-sky-600 hover:text-sky-800 transition">
          <Mail className="w-6 h-6" /> <span>pretty5320@naver.com</span>
        </div>
        <div className="flex items-center space-x-3 text-sky-600 hover:text-sky-800 transition">
          <MapPin className="w-6 h-6" /> <span>서울특별시 노원구</span>
        </div>
        <div className="flex items-center space-x-3 text-sky-600 hover:text-sky-800 transition">
          <Github className="w-6 h-6" />
          <a
            href="https://github.com/minsunmanju"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            github.com/minsunmanju
          </a>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-8 flex items-center text-sky-600">
          <Code className="w-7 h-7 mr-2" /> 기술 스택
        </h2>
        <div className="flex justify-center flex-wrap gap-10">
          <div className="flex flex-col items-center text-center hover:scale-110 transform transition">
            <SiHtml5 className="w-16 h-16 text-orange-500 mb-2" />
            <span className="font-medium text-gray-700">HTML</span>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-110 transform transition">
            <SiCss3 className="w-16 h-16 text-blue-500 mb-2" />
            <span className="font-medium text-gray-700">CSS</span>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-110 transform transition">
            <SiJavascript className="w-16 h-16 text-yellow-500 mb-2" />
            <span className="font-medium text-gray-700">JavaScript</span>
          </div>
          <div className="flex flex-col items-center text-center hover:scale-110 transform transition">
            <SiReact className="w-16 h-16 text-sky-400 mb-2" />
            <span className="font-medium text-gray-700">React</span>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="max-w-5xl mx-auto mb-16">
        <h2 className="text-3xl font-semibold mb-10 text-sky-600 text-center">
          프로젝트 경험
        </h2>
        <div className="space-y-12">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-sky-600">
                Game Forge
              </h3>
              <p className="text-gray-600 leading-relaxed">
                사용자 맞춤형 추천 알고리즘을 활용한 게임 쇼핑몰 웹 서비스.
                개인의 취향을 기반으로 맞춤형 게임을 추천하고, 구매까지 이어질
                수 있는 경험을 제공했습니다.
              </p>
            </div>
            <div className="flex-1 text-center md:text-right">
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full font-medium">
                웹 프로젝트
              </span>
            </div>
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2 text-sky-600">WeFit</h3>
              <p className="text-gray-600 leading-relaxed">
                LG CNS AM CAMP 3기에서 진행한 헬스장 게임화 커뮤니티 서비스.
                운동 기록과 포인트 시스템을 통해 동기부여를 강화하고, 사용자 간
                커뮤니케이션을 활성화했습니다.
              </p>
            </div>
            <div className="flex-1 text-center md:text-right">
              <span className="inline-block px-4 py-2 bg-sky-100 text-sky-600 rounded-full font-medium">
                부트캠프 프로젝트
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-500 text-sm mt-16 border-t border-sky-100 pt-6">
        © 2025 김민선. All rights reserved.
      </footer>
    </main>
  );
}
